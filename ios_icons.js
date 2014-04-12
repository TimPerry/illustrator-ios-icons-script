var folder = Folder.selectDialog();
var document = app.activeDocument;

function saveDocumentAsPng(size) {
	
	var fileName = folder.absoluteURI + "/icon_" + size + ".png",
		exportOptions = new ExportOptionsPNG24(),
		file = new File(fileName);
		
	exportOptions.horizontalScale = exportOptions.verticalScale = 100 * Math.max(size/document.width, size/document.height);
	exportOptions.antiAliasing = true;
	exportOptions.transparency = false;
	exportOptions.artBoardClipping = true;
	
	document.exportFile(file, ExportType.PNG24, exportOptions);
	
}

if (document && folder) {
	
	// spotlight ios5,6
	// settings ios 5-7
	saveDocumentAsPng(29);
	saveDocumentAsPng(58);

	// ios7 spotlight
	saveDocumentAsPng(80);
	
	// app icon ios5,6
	saveDocumentAsPng(57);
	saveDocumentAsPng(114);

	// ios7 app icon
	saveDocumentAsPng(29);

}
