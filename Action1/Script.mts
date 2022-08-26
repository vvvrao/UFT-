 
AIUtil.SetContext Browser("creationtime:=0")
AIUtil.FindTextBlock("REGISTRATION").Click
AIUtil("text_box", "First Name").Type "Default_name"
AIUtil("text_box", "Last Name").Type "Default_lastname"
AIUtil("text_box", "Email").Type "defaultname1@gmail.com"
AIUtil("text_box", "User Name").Type "defaultusername1234"
AIUtil("text_box", "Password").Type "DefaultPasword@1234"
AIUtil("text_box", "Confirm Password").Type "DefaultPasword@1234"
AIUtil("button", "4 Db").Click



