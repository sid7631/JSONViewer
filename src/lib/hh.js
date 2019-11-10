//import dependencies
import { concat } from '../util/string';
import data from '../util/data.json';

//return PdfViewer class
export class PdfViewer {
    // constructor(elem, boxes) {
    //     this.elem = elem;
    //     this.boxes = boxes;

    //     this.initialized = false;
    //     console.log(data)
    // }

    constructor(elem, boxes) {
        this.elem = elem;
        this.boxes = data[0].page_details;

        this.boxes.map(tex => console.log(tex))
        this.initialized = false;
        console.log(data[0].page_details)
    }

    //initialize plugin
    init() {
        let page = document.createElement('div');
        page.classList.add('pdf-viewer');

        //store element referance
        this.page = this.elem.appendChild( page);

        //render initial doc
        this.renderBoxes();

        //set initialized to true
        this.initialized = true;
    }

    getBoxData( box ) {
        return box.text;
    }

    //get list of boxes with text
    getBoxes() {
        return this.boxes.map(
            box => this.getBoxData(box)
        );
    }

    //return box element with text
    getBoxDiv( text) {
        let box = document.createElement('div')
        box.innerHTML = text

        return box;
    }

    appendBox( box ){
        this.page.appendChild(box);
    }

    //render entire Boxes
    renderBoxes() {
        let boxes = this.getBoxes();
        let boxElements = boxes.map(
            text => this.getBoxDiv( text)
        );

        console.log(boxElements)
        for(let box of boxElements) {
            this.appendBox( box );
        }
    }

    //add new Box
    addBox( box) {
        let text = this.getBoxData( box );
        let boxElem = this.getBoxDiv( text);

        this.appendBox( boxElem);
    }






}