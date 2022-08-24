import '../css/style.css';

function Home(){
    let url = "https://discord.com/api/oauth2/authorize?client_id=1010476447967748116&permissions=8&scope=bot";
    return (
        <div className="Home">
              <section class="home" id="home">
                <div class="home-content">
                <p class="p1">Hello Cuy, its me</p>
                <h1>CuyBot</h1>
                <p class="p2">Simple And Interractive Bot Used In Your Channel</p>
                <a href={url} target="_blank" rel='noreferrer'><button>Invite Now!</button></a>
                </div>
            </section>
        </div>
    )
}

export default Home;