import {Component, OnInit} from "@angular/core";
import {DemoInfo} from '../models'
import {DemoService}from './demo.service'
@Component({
    selector: "demo-module-page",
    templateUrl: "./demo.component.html",
    styleUrls:["./demo.style.css"],
    providers: [DemoService]
})

export class DemoPageComponent implements OnInit {

    info:DemoInfo=new DemoInfo();
    num1State:boolean=false;
    num2State:boolean=false;
    infoData:DemoInfo[];
    IsValidInput:boolean=false;
    constructor(private service:DemoService) 
    {
      
    }

    ngOnInit() 
    {
        this.getData();
    }

    IsDisable():boolean{
        return false;
    }

    isNumeric(event: any) {
       this.num1State=(this.info.num1>0);
       this.num2State=(this.info.num2>0);
       this.IsValidInput=(this.info.num1>0 &&  this.info.num2>0)
       //return this.service.isNumeric(event);
    };


    save(){
        this.info.result=this.info.num1 * this.info.num2;
        this.service.Save(this.info).subscribe((o)=>this.getData())
    }

    getData(){
        this.service.Get().subscribe((o)=>this.infoData=o);
    }

}


