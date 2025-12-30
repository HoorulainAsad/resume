# Manual Deployment Script
Write-Host "Building project..."
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Error "Build failed"
    exit 1
}

$distDir = "dist"
if (-not (Test-Path $distDir)) {
    Write-Error "Dist directory not found"
    exit 1
}

# Get remote URL from current repo
$remoteUrl = git config --get remote.origin.url
if (-not $remoteUrl) {
    Write-Error "Could not find remote origin URL"
    exit 1
}

Write-Host "Deploying to $remoteUrl..."

Push-Location $distDir

# Initialize fresh git repo in dist
if (Test-Path ".git") {
    Remove-Item -Recurse -Force ".git"
}
git init
git checkout -b gh-pages
git add -A
git commit -m "Deploy $(Get-Date)"

# Push
git remote add origin $remoteUrl
git push -f origin gh-pages

if ($LASTEXITCODE -ne 0) {
    Write-Error "Deployment failed"
    Pop-Location
    exit 1
}

Pop-Location
Write-Host "Deployed successfully!"
