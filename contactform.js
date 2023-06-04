function submitToGoogleForm() {
    var formURL = 'https://docs.google.com/forms/d/e/1FAIpQLScTS4m9Fgkm03c5iKospFKvnNKOik6p-BhTDi4SpdwrYEwnfA/viewform?usp=sf_link';
  
    fetch(formURL, {
      method: 'POST',
      body: formData
    })
    .then(function(response) {
      // Handle the response if needed
      console.log('Form submitted successfully');
    })
    .catch(function(error) {
      // Handle any errors
      console.error('Error submitting the form:', error);
    });
  }
  