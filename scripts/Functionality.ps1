$Entity = $Args[0]
$Query = $Args[1]
$IsPromise = $Args[2]
$FunctionName = $Args[3]
$HttpRequest = $Args[4]
$Route = $Args[5]

if ( $Args.Count -ne 6 ) {
  Write-Output 'Functionality [Entity] [Query] [isPromise] [FunctionName] [HttpRequest] [Route]'
}


Invoke-Expression "$PSScriptRoot\Functions.ps1 $Entity query $Query"

if ($IsPromise -eq 'promise') {
  Invoke-Expression "$PSScriptRoot\Functions.ps1 $Entity repository-promise $FunctionName $Query"
}
else {
  Invoke-Expression "$PSScriptRoot\Functions.ps1 $Entity repository $FunctionName $Query"
}

Invoke-Expression "$PSScriptRoot\Functions.ps1 $Entity service $FunctionName"

Invoke-Expression "$PSScriptRoot\Functions.ps1 $Entity controller $FunctionName"

Invoke-Expression "$PSScriptRoot\Functions.ps1 $Entity route $HttpRequest $Route $FunctionName"