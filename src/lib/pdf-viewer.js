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

        //page number
        this.pageNumber = 0;
        this.pdfWidth = '523';
        this.pdfHeight = '626';
        this.widthOffset = this.pdfWidth / data[this.pageNumber].pdf_width;
        this.heightOffset = this.pdfHeight / data[this.pageNumber].pdf_height;
        console.log(this.widthOffset, this.heightOffset)

        this.boxes = data[this.pageNumber].page_details;

        this.boxes.map(tex => console.log(tex))
        this.initialized = false;
        console.log(data[0].page_details)
    }

    //initialize plugin
    init() {
        let page = document.createElement('div');
        page.classList.add('pdf-viewer');
        page.style.minHeight = this.pdfHeight+'px';
        page.style.minWidth = this.pdfWidth+'px';

        //store element referance
        this.page = this.elem.appendChild( page);

        //render initial doc
        this.renderBoxes();

        //set initialized to true
        this.initialized = true;
    }

    getBoxData( box ) {
        return box;
    }

    //get list of boxes with text
    getBoxes() {
        return this.boxes.map(
            box => this.getBoxData(box)
        );
    }

    //return box element with text
    getBoxDiv( boxData) {
        let box = document.createElement('div')
        let ii = boxData.block_text
        console.log(ii)
        box.innerHTML = ii
        box.style.position = "absolute"
        box.style.left = boxData.bbox[0]*this.widthOffset+'px'
        box.style.top = boxData.bbox[1]*this.heightOffset+'px'
        box.style.width = boxData.bbox[2]*this.widthOffset+'px'
        box.style.height = boxData.bbox[3]*this.heightOffset+'px'
        box.style.fontSize = boxData.avg_size*this.heightOffset + 2+'px'
        box.style.whiteSpace = "pre-wrap";

        box.onclick = this.onmouseover

        return box;
    }

    onmouseover () {
        console.log("mouseover")
    }

    appendBox( box ){
        this.page.appendChild(box);
    }

    //render entire Boxes
    renderBoxes() {
        let boxes = this.getBoxes();
        let boxElements = boxes.map(
            boxData => this.getBoxDiv( boxData)
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