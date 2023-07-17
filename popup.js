document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submitBtn').addEventListener('click', async () => {
    const webhookUrl = 'DISCORD_WEBHOOK_URL';

    const englishTerm = document.getElementById('englishTerm').value;
    const turkishTerm = document.getElementById('turkishTerm').value;
    const category = document.getElementById('category').value;

    const englishTermEscaped = englishTerm.replace(/'/g, "\\'");
    const turkishTermEscaped = turkishTerm.replace(/'/g, "\\'");

    const content = `İngilizce terim: ${englishTerm}\nTürkçe terim: ${turkishTerm}\nKategori: ${category}\nKod:\n\`\`\`    ['${englishTermEscaped}'] = '${turkishTermEscaped}',\`\`\`\n> [Sithpedi Sözlüğü'ne ekle](<https://starwars.fandom.com/tr/wiki/Modül:Sozluk/Maddeler?action=edit>)`;

    const payload = {
      content: content
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      document.getElementById('successMessage').classList.remove('hidden');
    } else {
      alert(`Failed to send message: ${response.statusText}`);
    }
  });
});
