$excel = New-Object -ComObject Excel.Application
$excel.Visible = $false
try {
    $file = "C:\Users\hbojja\OneDrive - Nutreco Nederland B.V\Desktop\VV_dashboard\excel files\Part_Qualification_FF_Tracker_2026.xlsx"
    $wb = $excel.Workbooks.Open($file)
    foreach ($ws in $wb.Worksheets) {
        Write-Host "Sheet: $($ws.Name)"
        $range = $ws.UsedRange
        $rows = $range.Rows.Count
        if ($rows -gt 200) { $rows = 200 }
        $cols = $range.Columns.Count
        if ($cols -gt 20) { $cols = 20 }
        for ($r = 1; $r -le $rows; $r++) {
            $found = $false
            for ($c = 1; $c -le $cols; $c++) {
                $val = $range.Cells.Item($r, $c).Text
                if ($val -match "PARTS BY FUNCTION|MATURITY|Category|Group") {
                    $found = $true
                }
            }
            if ($found) {
                Write-Host "--- Match near row $r in $($ws.Name) ---"
                $start = [math]::Max(1, $r - 2)
                $end = [math]::Min($rows, $r + 15)
                for ($rx = $start; $rx -le $end; $rx++) {
                    $rText = ""
                    for ($c = 1; $c -le $cols; $c++) {
                        $val = $range.Cells.Item($rx, $c).Text
                        $rText += "'$val', "
                    }
                    Write-Host "Row $rx : $rText"
                }
                break
            }
        }
    }
    $wb.Close($false)
} finally {
    $excel.Quit()
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel) | Out-Null
}
