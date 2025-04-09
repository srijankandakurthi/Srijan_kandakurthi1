const supabase = window.supabase.createClient(
    'https://tqrmohytedmvgmlepjnf.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxcm1vaHl0ZWRtdmdtbGVwam5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMjc4MDYsImV4cCI6MjA1OTcwMzgwNn0.Y_Tu7cbCvlpdoDbZ2U1rV8fnzrpF54JQDlbguThwXh0'
  );

  // Handle form submission
  document.getElementById('userForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const { data, error } = await supabase
      .from('srijan_data')
      .insert([{ name: name, email: email }]);

    if (error) {
      console.error('Insert error:', error.message);
      alert('Error saving data!');
    } else {
      console.log('Inserted:', data);
      alert('User added!');
      document.getElementById('userForm').reset();
    }
  });