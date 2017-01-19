/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* globals console, window, document */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classic';
import Typing from '@ckeditor/ckeditor5-typing/src/typing';
import Paragraph from '../../src/paragraph';
import Undo from '@ckeditor/ckeditor5-undo/src/undo';
import Enter from '@ckeditor/ckeditor5-enter/src/enter';
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import Link from '@ckeditor/ckeditor5-link/src/link';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

ClassicEditor.create( document.querySelector( '#editor' ), {
	plugins: [
		Typing,
		Paragraph,
		Undo,
		Enter,
		Clipboard,
		Link,
		Bold,
		Italic
	],
	toolbar: [ 'bold', 'italic', 'link', 'undo', 'redo' ]
} )
.then( editor => {
	window.editor = editor;
} )
.catch( err => {
	console.error( err.stack );
} );
