function showMore() {
    var newElements = document.getElementsByClassName('new-element');
    var showMoreButton = document.getElementById('showMoreButton');

    // Toggle the visibility of new elements
    for (var i = 0; i < newElements.length; i++) {
        if (newElements[i].classList.contains('hidden')) {
            newElements[i].classList.remove('hidden');
        } else {
            newElements[i].classList.add('hidden');
        }
    }

    // Toggle the text of the button
    if (showMoreButton.innerText === 'Show More') {
        showMoreButton.innerText = 'Less';
    } else {
        showMoreButton.innerText = 'Show More';

        // Scroll to the top of the events section
        var eventsSection = document.getElementById('events-placeholder');
        eventsSection.scrollIntoView();
    }
}
