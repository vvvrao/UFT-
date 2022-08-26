AIUtil.SetContext Browser("creationtime:=0")
AIUtil("text_box", "User Name").Type "defaultusername1234"
AIUtil("text_box", "Password").Type "DefaultPasword@1234"
AIUtil("button", "", micFromTop, 1).Click
AIUtil.FindTextBlock("Accounts").Click
AIUtil("button", "OPEN NEW ACCOUNT").Click
AIUtil("down_triangle", micAnyText, micFromTop, 1).Click
AIUtil.FindTextBlock("USD", micFromTop, 3).Click
AIUtil("down_triangle", micAnyText, micFromBottom, 1).Click
AIUtil.FindTextBlock("Savings Account").Click
AIUtil("text_box", "Name (for your own reference)").Type "Atharva Amrapurkar1"
AIUtil("button", "", micFromBottom, 1).Click
