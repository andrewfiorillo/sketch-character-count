
function count(context) {
	
	var app = NSApplication.sharedApplication(),
		text = context.selection.firstObject(),
		count;
	
	if (!text || text.class() != "MSTextLayer") {
		app.displayDialog("Select a text layer!");
		return;
	} else if (text.isEditingText()) {
		count = text.editingDelegate().textView().selectedRange().length;
	} else {
		count = text.stringValue().length();
	}

	app.displayDialog(count);

}