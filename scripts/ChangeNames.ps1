$NewEntity = $Args[0]
$OldEntity = $Args[1]

$Directory = ".\server\src\$NewEntity"
$Files = (Get-ChildItem $Directory)

$Files | Rename-Item -NewName { $_.name -replace $OldEntity, $NewEntity }