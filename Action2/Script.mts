AIUtil.SetContext Browser("creationtime:=0")
AIUtil("text_box", "User Name").Type "defaultusername1234"
AIUtil("text_box", "Password").Type "DefaultPasword@1234"
AIUtil("button", "", micFromTop, 1).Click

'LoadFunctionLibrary "C:\loginfunctionality.qfl"

