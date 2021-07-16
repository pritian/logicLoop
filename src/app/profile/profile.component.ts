import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profielData:any;
  like = 20;
  chat = 24;
  view = 30;
  profilePera ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sapiente, dolorum consectetur est accusamus quis? Quae enim, aperiam aut asperiores dolores"
  constructor() { }

  ngOnInit(): void {

    this.profielData =[
      {
      peraGraph: "How Did Van Gogh's Turbulent Mind Depict One of the Most Comples Concepts in Physics?",
      like : 20,
      chat : 24,
      view :30,
      imgname : '6.png'
      },
      {
      peraGraph: "How Did Van Gogh's Turbulent Mind Depict One of the Most Comples Concepts in Physics?",
      like : 20,
      chat : 24,
      view :30,
      imgname : '1.jpeg'

      },
      {
      peraGraph: "How Did Van Gogh's Turbulent Mind Depict One of the Most Comples Concepts in Physics?",
      like : 9,
      chat : 89,
      view :22,
      imgname : '2.jpeg'

      },
      {
      peraGraph: "How Did Van Gogh's Turbulent Mind Depict One of the Most Comples Concepts in Physics?",
      like : 22,
      chat : 53,
      view :23,
      imgname : '4.jpeg'
      },
      {
      peraGraph: "How Did Van Gogh's Turbulent Mind Depict One of the Most Comples Concepts in Physics?",
      like : 6,
      chat : 2234,
      view :8,
      imgname : '3.jpeg'

      }
    ]


  }



}
