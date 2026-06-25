import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Chris() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chris Mazur - mate.dev</title>
        <meta name="description" content="mate.dev community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Chris Mazur{"      "}
          <span role="img" aria-label="mate">
          
        </span>          
        </h1>
        
        <h2>
          Building communities, one Mate 🧉 ( or a coffee ☕ ;) at a time!
        </h2>

        <p className={styles.description}>
        AAIF & CNCF Ambassador | Community Organizer, Cloud-Native, AI & Chess Enthusiast | Software & DevOps Engineer | From #Patagonia.{" "}🇦🇷 🇳🇿 🧉 ♜
        </p>

        <div className={styles.grid}>

          <a href="https://mate.dev" className={styles.cardSocial}>
            <h2>mate.dev &larr;</h2>
            <p><img src="/svgs/external-link.svg" alt="mate.dev" className={styles.logo} />{" "}mate.dev</p>
          </a>

          <a href="https://www.linkedin.com/in/cloud-native" className={styles.cardSocial}>          
            <h2>LinkedIn &rarr;</h2>
            <p><img src="/svgs/linkedin.svg" alt="matedev" className={styles.logo} />{" "}Chris on LinkedIn</p>
          </a>

          <a href="https://github.com/chaltenio" className={styles.cardSocial}>
            <h2>Github &rarr;</h2>
            <p><img src="/svgs/github.svg" alt="chaltenio" className={styles.logo} />{" "}chaltenio</p>
          </a>

        </div>

        <div className={styles.grid}> 

          <a href="https://discord.gg/xT9cMSy" className={styles.cardSocial}>
            <h2>Discord &rarr;</h2>
            <p>Join connecta.dev!</p>
          </a>

          <a href="https://twitter.com/chmazur" className={styles.cardSocial}>
            <h2>Twitter &rarr;</h2>
            <p><img src="/svgs/twitter.svg" alt="@chmazur" className={styles.logo} />{" "}@chmazur</p>
          </a>

          <a href="https://www.chess.com/member/chmazur" className={styles.cardSocial}>
            <h2>chess.com &rarr;</h2>
            <p>Let's play?!</p>
          </a>  

        </div>        

        <div className={styles.grid}> 
          <div>
            <h2>Connecting the Software Development Community in the APAC & LATAM regions since 2010:{' '} </h2>
            
            <div>
              <p>🧉{' '}Founder & Organiser Agentic AI Build Day (Auckland - {" "}<a href="https://www.agenticbuild.day/" target="_blank">agenticbuild.day)</a></p>            
              <p>🧉{' '}CNCF Ambassador <a href="https://www.credly.com/badges/dccc1596-15c1-474f-8d12-626c5b3b2534" target="_blank"> (Issued by The Linux Foundation)</a></p>
              <p>🧉{' '}Founder & Organiser Cloud Native Summit (Wellington - {" "}<a href="https://cloudnativesummit.co/nz" target="_blank">cloudnativesummit.co)</a></p>            
              <p>🧉{' '}Co-Founder & Event Community Lead - Agentics Day: MCP + Agents 2026<a href="https://www.credly.com/earner/earned/badge/35ac4d87-345b-48f5-8693-56fcccecd0bf" target="_blank"> (Issued by The Linux Foundation)</a></p>
              <p>🧉{' '}EnvoyCon NA 2025 Program Committee Member<a href="https://www.credly.com/earner/earned/badge/708ca679-ab62-49f1-b6f5-4ec53a39c766" target="_blank"> (Issued by The Linux Foundation)</a></p>
              <p>🧉{' '}Co-Chair KubeDay Australia 2024 - Melbourne<a href="https://www.credly.com/badges/f96c2033-ae20-4676-bbed-3921476dd7ec" target="_blank"> (Issued by The Linux Foundation)</a></p>
              <p>🧉{' '}Organizer - 2024 Cloud Native Community Group - Auckland<a href="https://www.credly.com/badges/f8063808-d957-4f84-8e64-f3482b944aa2" target="_blank"> (Issued by The Linux Foundation)</a></p>
              <p>🧉{' '}Co-Founder Argentina PHP User Group (Argentina <a href="https://x.com/grupophp" target="_blank"> @grupophp</a>)</p>
              <p>🧉{' '}Co-Founder & Co-Organiser PHP Conference Argentina (Buenos Aires - <a href="https://twitter.com/phpconferencear" target="_blank">@phpconferencear</a>)</p>
              <p>🧉{' '}Founder & Organiser PHP Conference New Zealand (Wellington - <a href="https://twitter.com/phpconfnz" target="_blank">@phpconfnz</a>)</p>
              <p>🧉{' '}Founder & Organiser ScaleConf New Zealand (Wellington - <a href="https://twitter.com/sconfnz" target="_blank">@sconfnz</a>)</p>
              <p>🧉{' '}Founder & Organiser Service Mesh Day (San Francisco & Online - {" "}<a href="https://servicemeshday.com" target="_blank">servicemeshday.com</a>)</p>
              <p>🧉{' '}Founder & Organiser Full-Stack Day (Auckland & Online - {" "}<a href="https://fullstackday.com" target="_blank">fullstackday.com</a>)</p>
              <p>🧉{' '}Founder & Co-Organiser <a href="https://www.meetup.com/Full-Stack-Dev-New-Zealand/" target="_blank">Full-Stack Dev New Zealand</a> (Meetup)</p>
              <p>🧉{' '}Founder & Organiser <a href="https://www.meetup.com/Wellington-Web-Dev/" target="_blank">Web Development Wellington</a> (Meetup)</p>
              <p>🧉{' '}Organiser <a href="https://www.meetup.com/aucklandweb/" target="_blank">Web Dev Meetup Auckland</a> (Meetup)</p>
              <p>🧉{' '}Founder & Co-Organiser <a href="https://www.meetup.com/Wellington-DevOps-Group/" target="_blank">Devops Wellington</a> (Meetup)</p>
              <p>🧉{' '}Founder & Organiser <a href="https://www.meetup.com/Cloud-Native-Auckland/" target="_blank">Cloud Native & Platform Engineering Auckland</a> (Meetup)</p>
              <p>🧉{' '}Founder & Organiser <a href="https://connecta.dev" target="_blank">Connecta.DEV (online community)</a></p>
              <p>🧉{' '}Co-Organiser <a href="https://www.meetup.com/golang-argentina/" target="_blank">Golang Argentina</a> (Meetup)</p>
              <p>🧉{' '}Founder & Organiser <a href="https://www.meetup.com/full-stack-engineering-buenos-aires" target="_blank">Full-Stack Buenos Aires</a> (Buenos Aires & Online))</p>
            </div>

            <h2>Companies that have been supporting our projects over the past decade:</h2>

            <Image
              src="/sponsors-mate-dev.png"
              alt="Companies that have been supporting our project over the past decade"
              width={800}
              height={400}
              style={{ maxWidth: '100%', height: 'auto' }}
            />

            <h3>
              <a
                href="https://buymeacoffee.com/matedev"
                target="_blank"
                rel="noopener noreferrer"
              >
              Support my project: ☕ buymeacoffee.com/matedev
              </a>
            </h3>

          </div>
        </div> 

      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/matedev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chris Mazur - Auckland / Melbourne / San Francisco / Buenos Aires
        </a>
      </footer>
    </div>
  )
}

export default Chris
