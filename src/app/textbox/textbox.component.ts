import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FireService } from '../services/fire.service';
import { Text } from '../models/text.model';
declare var MediumEditor:any;

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {
  
  editor: any

  @ViewChild('editable', {
    static: true
  }) editable:ElementRef
  
  constructor(private fireService: FireService) { }
  
  async ngAfterViewInit(): Promise<void> {
    this.editor = new MediumEditor(this.editable.nativeElement)
    let data = await this.fireService.getContent(window.localStorage.getItem('email'))
    this.editor.setContent(data)
    this.editor.subscribe('editableInput', (event, editorElement) => {
      let data = new Text()
      data.email = window.localStorage.getItem('email') 
      data.content = editorElement.innerHTML
      this.fireService.addContent(data)
    })
  }

  ngOnInit(): void { }

}
