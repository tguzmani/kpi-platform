$Entity = $Args[0]
$Component = $Args[1]

Switch ($Component) {
  "query" {

    $QueryName = $Args[2]
    $File = ".\server\src\$Entity\$Entity.queries.js"

    $Template = (Get-Content -Path ".\scripts\templates\$Component") |
    ForEach-Object { $_ -replace "QUERY", $QueryName } 

    Add-Content -Path $File -Value $Template
  }

  "repository-promise" {

    $FunctionName = $Args[2]   
    $QueryName = $Args[3]

    $File = ".\server\src\$Entity\$Entity.repository.js"

    $Template = (Get-Content -Path ".\scripts\templates\$Component") |
    ForEach-Object {
      $_ -creplace "ENTITY", $Entity `
        -creplace "FUNCTION", $FunctionName `
        -creplace "QUERY", $QueryName 
    }
    
    Add-Content -Path $File -Value $Template

    Set-Clipboard -Value "$FunctionName,"
  }

  "repository" {

    $FunctionName = $Args[2]   
    $QueryName = $Args[3]

    $File = ".\server\src\$Entity\$Entity.repository.js"

    $Template = (Get-Content -Path ".\scripts\templates\$Component") |
    ForEach-Object {
      $_ -creplace "ENTITY", $Entity `
        -creplace "FUNCTION", $FunctionName `
        -creplace "QUERY", $QueryName 
    }
    
    Add-Content -Path $File -Value $Template

    Set-Clipboard -Value "$FunctionName,"
  }

  "service" {

    $FunctionName = $Args[2]   
    $QueryName = $Args[3]

    $File = ".\server\src\$Entity\$Entity.services.js"

    $Template = (Get-Content -Path ".\scripts\templates\$Component") |
    ForEach-Object {
      $_ -creplace "ENTITY", $Entity `
        -creplace "FUNCTION", $FunctionName `
    }
    
    Add-Content -Path $File -Value $Template

    Set-Clipboard -Value "$FunctionName,"
  }

  "controller" {

    $FunctionName = $Args[2]   
    $QueryName = $Args[3]

    $File = ".\server\src\$Entity\$Entity.controller.js"

    $Template = (Get-Content -Path ".\scripts\templates\$Component") |
    ForEach-Object {
      $_ -creplace "ENTITY", $Entity `
        -creplace "FUNCTION", $FunctionName `
    }
    
    Add-Content -Path $File -Value $Template

    Set-Clipboard -Value "$FunctionName,"
  }

  "route" {

    $HttpRequest = $Args[2]   
    $Route = $Args[3]
    $FunctionName = $Args[4]

    $File = ".\server\src\$Entity\$Entity.routes.js"

    $Template = (Get-Content -Path ".\scripts\templates\$Component") |
    ForEach-Object {
      $_ -creplace "HTTP", $HttpRequest `
        -creplace "ROUTE", $Route `
        -creplace "ENTITY", $Entity `
        -creplace "FUNCTION", $FunctionName `
    }
    
    Add-Content -Path $File -Value $Template

    Set-Clipboard -Value "$FunctionName,"
  }
}