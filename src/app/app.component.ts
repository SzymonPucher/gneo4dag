import { Component } from '@angular/core';
import { AngularNeo4jService } from 'angular-neo4j';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'n4jang';

  before: Array<any>;
  after: Array<any>;
  the_one: string;


  constructor(private neo4j: AngularNeo4jService) {
  const url = 'bolt://localhost:7687';
  const username = 'neo4j';
  const password = 'nela';
  const encrypted = false;

  this.neo4j
      .connect(
        url,
        username,
        password,
        encrypted
      )
      .then(driver => {
        if (driver) {
          console.log(`Successfully connected to ${url}`);
        }
      });

    this.before = ['prev'];
    this.after = ['after'];
    this.the_one = 'this_one';
  }

  runQuery(value: string) { 
    const query = 'MATCH (n {name: $name})-[r]-(n2) RETURN n.name, n, r, n2';
    this.the_one = value;
    this.before = []; 
    this.after = [];
    this.neo4j.run(query, { name: value }).then(res => {
      console.log(res);
      res.forEach(element => {  
        if(element[1].identity == element[2].end){
          this.before.push(element[3].properties.name)
        }
        else{
          this.after.push(element[3].properties.name)
        }
      });
    });
  }
}
