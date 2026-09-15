Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Bitmap]::FromFile("c:\Users\hbojja\OneDrive - Nutreco Nederland B.V\Desktop\Eruvaka_VV_Dashboard_Phase1_Eruvaka_Branded_Visual_Final\assets\eruvaka_logo.jpg")
$bmp = New-Object System.Drawing.Bitmap($img.Width, $img.Height)
for ($y = 0; $y -lt $img.Height; $y++) {
    for ($x = 0; $x -lt $img.Width; $x++) {
        $c = $img.GetPixel($x, $y)
        if ($c.R -gt 230 -and $c.G -gt 230 -and $c.B -gt 230) {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
        } else {
            $bmp.SetPixel($x, $y, $c)
        }
    }
}
$img.Dispose()
$bmp.Save("c:\Users\hbojja\OneDrive - Nutreco Nederland B.V\Desktop\Eruvaka_VV_Dashboard_Phase1_Eruvaka_Branded_Visual_Final\assets\eruvaka_logo_transparent.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
