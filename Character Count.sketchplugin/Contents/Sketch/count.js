var UI = require('sketch/ui')

function count(context) {
	
	var count, text = context.selection.firstObject()
	
	if (!text || text.class() != "MSTextLayer") {
		UI.message("Select a text layer!"); return
	} else if (text.isEditingText()) {
		count = text.editingDelegate().textView().selectedRange().length
	} else {
		count = text.stringValue().length()
	}

	UI.message(`✏️ Character Count: ${count}`)

}