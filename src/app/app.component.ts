import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentesOsuna';
  versions = [
    {
      versionName: "The Worst Takes It All",
      versionId: 0,
      villainList: [
        {
          name: "Ursula",
          objective: "Ursula must play the Trident and the Crown, and move them as needed so she has them at her Lair, defeating King Triton along the way. She can only win at the start of her turn.",
          phrase: "The sea and all its spoils bow to my power!",
          image: "assets/img/Ursula.webp"
        },
        {
          name: "Captain Hook",
          objective: "Captain Hook must defeat Peter Pan at the Jolly Roger.",
          phrase: "Double the powder and shorten the fuse!",
          image: "assets/img/Captain_Hook.webp"
        },
        {
          name: "Jafar",
          objective: "Jafar must unlock the Cave of Wonders, play the Magic Lamp, hypnotize Genie, and move the Magic Lamp to the Sultan's Palace. He can only win at the start of his turn.",
          phrase: "Finally, you will bow to me!",
          image: "assets/img/Jafar.webp"
        },
        {
          name: "Maleficent",
          objective: "Maleficent must play Curses and move them as needed so she has at least one Curse at each location in her realm. She can only win at the start of her turn.",
          phrase: "Now go with a curse and serve me well!",
          image: "assets/img/Maleficent.webp"
        },
        {
          name: "Prince John",
          objective: "Prince John must collect Power so he has at least 20 Power. He can only win at the start of his turn.",
          phrase: "This crown gives me a feeling of power!",
          image: "assets/img/Prince_John.webp"
        }
      ]
    },
    {
      versionName: "Bigger and Badder",
      versionId: 1,
      villainList: [
        {
          name: "Lotso",
          objective:"Lotso must reduce the Strength of all four of his Heroes and move them to Caterpillar Room, and also have Buzz Lightyear, in any mode, in the same location.",
          phrase: "You're a piece of plastic. You were meant to be thrown away.",
          image: "assets/img/Lotso.webp"
        },
        {
          name:"Madam Mim",
          objective:"Madam Mim must defeat all of Merlin's Transformations. She can do so by either Vanquishing them with their corresponding Mim Transformations in her Villain deck, or by playing I'll Make the Rules.",
          phrase:"Want to fight? Want to have a Wizard's Duel?!",
          image:"assets/img/Madam_Mim.webp"
        },
        {
          name:"Syndrome",
          objective:"Syndrome must activate Syndrome's Remote while at Omnidroid v.10's location to defeat it, then clear his Realm of Heroes.",
          phrase:"You can't count on anyone, especially your heroes.",
          image:"assets/img/Syndrome.webp"
        }
      ]
    },
    {
      versionName: "Perfectly Wretched",
      versionId:2,
      villainList: [
        {
          name:"Pete",
          objective:"Pete must complete four different randomly selected Goals, one for each location in his Realm.",
          phrase:"I'm gonna knock you right into next week!",
          image:"assets/img/Pete.webp"
        },
        {
          name:"Mother Gothel",
          objective:"Mother Gothel must acquire at least 10 Trust, which she can gain by moving Rapunzel to Rapunzel's Tower, defeating Heroes, and moving the Hair Brush. She can only win at the start of her turn.",
          phrase:"You want me to be the bad guy? Fine. Now I'm the bad guy.",
          image:"assets/img/Mother_Gothel.webp"
        },
        {
          name:"Cruella De Vil",
          objective:"Cruella De Vil must bring Puppy Tokens into her Realm, and then capture them until she has at least 99 puppies.",
          phrase:"I'll get even. Just wait. You'll be sorry.",
          image:"assets/img/Cruella_De_Vil.webp"
        }
      ]
    },
    {
      versionName: "Wicked to the Core",
      versionId: 3,
      villainList: [
        {
          name:"Dr. Facilier",
          objective:"Dr. Facilier must play the Talisman and Rule New Orleans, and then play The Cards Will Tell to try and reveal Rule New Orleans from the Fortune pile.",
          phrase:"I got friends on the other side.",
          image:"assets/img/Dr_Facilier.webp"
        },
        {
          name:"Evil Queen",
          objective:"Evil Queen must play four different Ingredients, bring Snow White into the Realm, get enough Poison to defeat her, and then play Take a Bite.",
          phrase:"I'll be the fairest in the land!",
          image:"assets/img/Evil_Queen.webp"
        },
        {
          name:"Hades",
          objective:"Hades must play Titans and move them so he has at least three untrapped Titans at Mount Olympus. He can only win at the start of his turn.",
          phrase:"Everybody's got a weakness.",
          image:"assets/img/Hades.webp"
        }
      ]
    }
  ];

  selectedVersion = this.versions.filter(version => version.versionId == 0)[0];

  updateVersion(versionId:number){
    console.log(versionId)
    this.selectedVersion = this.versions.filter(version => version.versionId == versionId)[0];
  }
}

