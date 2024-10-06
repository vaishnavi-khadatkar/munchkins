
function showAnswer(element) {
  const faqItem = element;
  const plusMinus = faqItem.querySelector('i.fas');
  const faqContent = faqItem.querySelector('.faq-content');

  if (plusMinus.classList.contains('fa-plus')) {
    plusMinus.classList.remove('fa-plus');
    plusMinus.classList.add('fa-times');
    faqContent.style.display = 'block';
  } else {
    plusMinus.classList.remove('fa-times');
    plusMinus.classList.add('fa-plus');
    faqContent.style.display = 'none';
  }
}

document.getElementById('submitButton').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default form submission

  const form = document.getElementById('franchiseForm'); // Reference the form
  const formData = new FormData(form); // Create FormData from the form
  const data = Object.fromEntries(formData); // Convert FormData to a plain object

  fetch('/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});
