function changeColorWithReactionTime ( elementId ) {
    // Get a reference to the element by its ID
    const element = document.getElementById( elementId );

    // Set a random timeout between 1 and 10 seconds
    const timeout = Math.floor( Math.random() * 9000 ) + 1000;

    // Use setTimeout to change the color of the element after the random timeout
    setTimeout( () => {
        // Generate a random color
        const randomColor = '#' + Math.floor( Math.random() * 16777215 ).toString( 16 );

        // Change the background color of the element to the random color
        element.style.backgroundColor = randomColor;

        // Enable the button to check reaction time
        const button = document.getElementById( 'reactionButton' );
        button.disabled = false;

        // Record the time the color changed
        const colorChangedTime = Date.now();

        // Attach an event listener to the button to calculate the reaction time
        button.addEventListener( 'click', () => {
            // Calculate the reaction time in milliseconds
            const reactionTime = Date.now() - colorChangedTime;

            // Display the reaction time in an alert box
            alert( `Your reaction time was ${ reactionTime } milliseconds.` );

            // Disable the button after it's been clicked once
            button.disabled = true;
        } );
    }, timeout );
}


changeColorWithReactionTime( "icon-box" );
