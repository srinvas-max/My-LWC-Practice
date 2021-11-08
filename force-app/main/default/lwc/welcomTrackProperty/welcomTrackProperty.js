import { LightningElement} from 'lwc';

export default class WelcomTrackProperty extends LightningElement {
     greetings;
    handleGreetingChanges(event){
        this.greetings=event.target.value;
        console.log(this.greetings);

    }
}