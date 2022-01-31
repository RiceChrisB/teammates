import { Component } from '@angular/core';

/**
 * Loading spinner to show when waiting for request.
 */
@Component({
  selector: 'tm-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent {

  // Define the loading_message variables
  loading_message: string = "";
  loading_message_2: string = "";

  // Generate an additional message after a certain period of time
  generateAdditionalMessage() {
    // Runs for 10 minutes
    for (let i = 1; i <= 2400; i++) {
      // Format of setTimeout (message, time [ms])
      setTimeout(() => { this.loading_message = this.loading_message + "."}, i * 250);
      // Reset loading data message after 4 dots
      setTimeout(() => { this.loading_message = "Loading data"}, i * 1000);
    }

    // Generates the additional loading data message (to calm the user)
    setTimeout(() => { this.loading_message_2 = "Data is still loading. Please wait" }, 1500);

  }

  // Constructor for the LoadingSpinnerComponent class
  constructor() {
    // Define loading_message (needed to make first loop of generateAdditionalMessage() work)
    this.loading_message = "Loading data.";
    
    // Starts tracking when the additional message should pop up
    this.generateAdditionalMessage();
  }

}
