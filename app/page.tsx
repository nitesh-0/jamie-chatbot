export default function Home() {
  return (
    <div>
      <h1>Welcome to My Summer Camp Page</h1>
      {/* Chatbot Iframe */}
      <iframe
        src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/11/21/05/20241121055027-BUVRELXI.json"
        style={{
          width: '100%',
          height: '500px',
          border: 'none',
        }}
        title="Chatbot"
      ></iframe>
    </div>
  );
}
