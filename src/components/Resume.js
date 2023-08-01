import React, { Component, useEffect } from 'react';

import '../resume.css'; 
import Header from './Header';
import Footer from './Footer';
import animation from '../animation.css';



export default  class Resume extends Component {
        // check if an element is in viewport
        isElementInViewport(el) {
          const rect = el.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
        }

        callbackFunc() {
          const items = document.querySelectorAll('.timeline li');
          for (let i = 0; i < items.length; i++) {
            if (this.isElementInViewport(items[i])) {
              items[i].classList.add('in-view');
            }
          }
        }

        componentDidMount() {
          this.callbackFunc();
          window.addEventListener('load', this.callbackFunc.bind(this));
          window.addEventListener('resize', this.callbackFunc.bind(this));
          window.addEventListener('scroll', this.callbackFunc.bind(this));
        }

        componentWillUnmount() {
          window.removeEventListener('load', this.callbackFunc.bind(this));
          window.removeEventListener('resize', this.callbackFunc.bind(this));
          window.removeEventListener('scroll', this.callbackFunc.bind(this));
        }

        componentDidUpdate() {
          this.callbackFunc();
        }

  render() {
    let resumeData = this.props.resumeData;
    
    return (
//       <section id="resume">
//         <Header resumeData={resumeData}/> 
//         <div class="main">
//           <h1>Thomson, Alexander [called Greek Thomson]</h1>
//           <h1>(1817–1875)</h1>
//           <p>
//           <img src="/Images/alex.jpg"/>
//           </p>
//           <p>
//           Thomson, Alexander [called Greek Thomson] (1817–1875), architect, was born on 9 April 1817 at Endrick 
// Cottage, Balfron, Stirlingshire, the seventeenth of the twenty children of John Thomson (1757/8–1824), 
// bookkeeper at Kirkman and Findlay's cotton spinning mill at Balfron, and the ninth of his second wife, 
// Elizabeth Cooper (d. 1830), whose father, George Cooper, was a schoolmaster in Aberdeen and whose 
// brother became the Burgher minister in Balfron. John Thomson's widow moved to Glasgow with her 
// younger children in 1825 and Alexander eventually began work in a writer's office before his talent as a 
// draughtsman was noticed by the Glasgow architect Robert Foote, who took him as an apprentice. Thomson
// then worked in the office of the architect John Baird I (1798–1859), with whom he stayed for about ten years, becoming his chief draughtsman. In 1847, in a joint ceremony, Thomson and the unrelated John 
// Baird II (1816–1893) married Jane Nicholson (1825–1899) and Jessie Nicholson (1827–1866), daughters of 
// the London architect Michael Angelo Nicholson (1794–1841) [see under Nicholson, Peter (1765-1844)].
//           </p>
//           <p>
//           Thomson set up in independent practice in Glasgow in 1848, when he entered into partnership with his 
// brother-in-law John Baird II. This partnership was amicably terminated in 1857, when Thomson was 
// joined by his younger brother George (1819–1878), who was an architect who had also worked in the office 
// of John Baird I. In 1871 George left Glasgow to work as a missionary in the Cameroons, and in 1873 
// Thomson took Robert Turnbull (1839–1905) as a partner; the firm became known as A. and G. Thomson 
// and Turnbull.
//           </p>
//           <p>
//           Baird and Thomson began by building villas in the new suburbs of Glasgow and along the Clyde estuary; 
// these were designed in a variety of styles, including the Gothic and Romanesque. However, by the 
// mid-1850s Thomson had developed the refined and abstracted Grecian manner with which he would 
// become associated. This was employed for his unique double villa in Langside, Glasgow (1856–7), in which 
// two identical semi-detached houses faced in opposite directions, and in Holmwood House in Cathcart, 
// near Glasgow (1857–8), his finest villa, built for the paper manufacturer James Couper. Thomson's first 
// biographer, the Glasgow architect Thomas Gildard, wrote of Holmwood that, 'If architecture be poetry in 
// stone-and-lime—a great temple an epic—this exquisite little gem, at once classic and picturesque, is as 
// complete, self-contained, and polished as a sonnet', recognizing that he had done something 
// unprecedented (Gildard). Although he was influenced by the neo-classical work of the Prussian state 
// architect Karl Friedrich Schinkel, Thomson would seem to have been the first to apply picturesque 
// principles of composition to the Greek style in his villas. Holmwood was also remarkable for its scheme of 
// interior painted decoration, all designed by the architect along with furniture, carpets, and other 
// furnishings.
//           </p>
//           <p>
//           Thomson came to reject the use of the arch, whether pointed or round, and held that the trabeated 
// language of the Greeks could be the basis of a modern architecture which incorporated iron construction, 
// arguing that 'Stonehenge is really more scientifically constructed than York Minster' (An inquiry as to the 
// appropriateness of the Gothic style for the proposed buildings for the University of Glasgow, Proceedings of 
// the Glasgow Architectural Society, 6–7, 1865–7, 47; repr. in Stamp, Lectures, 67). He was never, however, a 
// conventional Greek revivalist, and his work was conspicuous for the originality with which he adapted and 
// combined precedents from Greece, Egypt, and elsewhere. For all his admiration of such buildings as 
// Thomas Hamilton's Royal High School in Edinburgh, he argued that the promoters of the Greek revival had 
// failed, 'because they could not see through the material into the laws upon which that architecture rested. 
// They failed to master their style, and so became its slaves' (Art and Architecture, 1874, 8; repr. in Stamp, 
// Lectures, 147). He was insistent that

//           </p>
//           <p style={{padding: '0 20px' , background: "#f8fcff"}}>
//           architecture in its highest forms does not bear the least resemblance to anything in nature, that it 
// is peculiarly and exclusively a human work; and yet, long before man came to need it, long before 
// the foundation of the world, at the very beginning, in the councils of eternity, the laws which 
// regulate this art were framed.Presidential address to the Glasgow Institute of Architects, The 
// Architect, 15 April 1871, 198; repr. in Stamp, Lectures, 101

//           </p>
//           <p>
//           In this insistence upon eternal laws Thomson's approach to architecture verged on the mystical, and, as a 
// devout Presbyterian, he was strongly influenced by the paintings and engravings of John Martin, which 
// depicted the exotic architecture of the cities of the Old Testament with a remorseless horizontality receding 
// towards infinity. Yet, from such images, he evolved a successful modern commercial architecture for 
// Glasgow. More than any other architect, Thomson gave a distinct character to the second city of the British 
// empire in his designs for warehouses and commercial buildings, and for terraces of houses and tenements. 
// In all these he arrived at novel treatments for urban façades, in which depth and variety were achieved by 
// the unusual arrangements of trabeated masonry combined with large windows of plate glass. The tragedy, 
// however, is that for all his admiration of the 'imperishable thought' of the Egyptians, Thomson's
// achievement was constructed of weak and friable Giffnock sandstone.
//           </p>
//           <p>
//           Thomson's commercial designs included Grecian Buildings in Sauchiehall Street (1867–8), the Cairney 
// Building in Bath Street (1860–61; dem.), the block in Gordon Street which he owned with his brother 
// (1859; altered), and Egyptian Halls in Union Street (1870–72), which the London-based Architect noted was 
// 'in Mr Thomson's well-known “Egyptian-Greek” style—a style which he has made his own, and in which 
// he has no rival' (The Architect, 13 July 1872). Thomson's domestic work included Moray Place in 
// Strathbungo (1859–61), where the architect himself lived from 1861 until his death, Eton Terrace in 
// Oakfield Avenue (1862–4), and Great Western Terrace (1867–77), arguably the finest in the city in its 
// grandeur and austerity. Gildard said of it that 'the windows have no dressings, but Greek goddesses could 
// afford to appear undressed' (Gildard). Queen's Park Terrace in Eglinton Street (1856–60; dem.) was highly 
// influential on the design of Glasgow's many tenements.
//           </p>
//           <p>
//           In addition, Thomson designed monumental urban churches for United Presbyterian congregations, which 
// the American historian Henry Russell Hitchcock considered were 'three of the finest Romantic Classical 
// churches in the world' (Hitchcock, 63). Of these, the only intact survivor is the St Vincent Street Church 
// (1857–9), with its tall and exotic steeple. In this building, stone construction was combined with cast-iron 
// columns and large sheets of glazing were applied directly to the masonry. Thomson's first church, the 
// Caledonia Road Church (1855–7), was gutted by fire in 1965. His most extraordinary and innovative 
// ecclesiastical building, the Queen's Park Church (1868–9), was Scotland's worst architectural loss of the 
// Second World War; its richly decorated interior moved the painter Ford Madox Brown to exclaim 'Well 
// done Glasgow!' and to put it 'above everything I have seen in modern Europe' (Glasgow Evening Times, 9 
// Oct 1893).
//           </p>
//           <p>
//           Owing to the loss of most of his drawings (a few remain in the Mitchell Library in Glasgow) and all of his 
// professional papers, it is not possible to catalogue the whole range of Thomson's artistic activity. What is 
// clear is that his career was to some extent paradoxical as, for all his intense idealism, Thomson was a 
// successful commercial architect willing, on occasion, to employ the styles of which he theoretically 
// disapproved. It also must be admitted that his insistence on such features as low-pitched roofs was not 
// always wholly practical in the climate of the west of Scotland. It is clear, however, that contemporaries 
// regretted that he was never awarded a commission for a public building commensurate with his talents. 
// Thomson's designs for the Albert Memorial in London and for the South Kensington Museum must have 
// seemed unfashionable in England to the point of perversity in the 1860s and only Glasgow, perhaps, could 
// allow his idiosyncratic approach to flourish. Yet he was denied the opportunity of submitting a design for the new buildings on Gilmorehill for the University of Glasgow when the commission was awarded, 
// without competition, to the London architect George Gilbert Scott. Thomson ridiculed the universalist 
// claims of the Gothic revival in general and Scott's design in particular in his published lecture of 1866.
//           </p>
//           <p>
//           Thomson was much involved in the affairs of the Glasgow Architectural Society and the Glasgow Institute 
// of Architects, and served as president of both. In 1874 he delivered four lectures on art and architecture to 
// the Glasgow School of Art and Haldane Academy; these covered the creations of the Egyptians, Greeks, and 
// Romans and essentially constituted his architectural testament. Further lectures on medieval architecture 
// were planned but never delivered owing to Thomson's death, from asthma and heart failure, at his home at 
// 1 Moray Place, Strathbungo, on 22 March 1875. He had been ill for some years and increasingly delegated 
// his professional practice to Turnbull. Had he survived the severe winter of 1874–5, Thomson planned to 
// make his first ever trip abroad, to Italy, to recover his health.
//           </p>
//           <p>
//           Thomson's achievement was widely recognized at the time of his death and a memorial fund was 
// established. This was used to present a marble bust of the architect, carved by his friend the sculptor John 
// Mossman, to the Glasgow corporation galleries in 1877, and to endow a travelling studentship, awarded 
// first in 1887, to the architect and historian William J. Anderson, and second, three years later, to Charles 
// Rennie Mackintosh.
//           </p>
//           <p>
//           His pupil (William?) Clunas later recorded that
//           </p>
//           <p style={{padding: '0 20px' , background: "#f8fcff"}}>
//           Alexander Thomson was, in appearance, a distinguished-looking man, of a good average height, 
// stout, well and proportionally made, a fine manly countenance with a profuse head of hair … for 
// the strictly professional side of his business he had but little capacity—punctual, he was not, 
// neither was he persevering. You could not say he was indolent, but there was a dreamy unrest 
// about him even when engaged on important work which caused matter-of-fact people who were 
// waiting for further details some annoyance. But when he did plunge into a piece of work his 
// attitude was that of a real devotee—patient, forceful, and painstaking.<br/><br/>

// Clunas, My impressions
//           </p>
//           <p>
//           Despite this, his estate was valued for Scottish inventory duty at £15,395 5s. 3d. He was buried in the 
// Southern Necropolis in Glasgow; the plot is now unmarked. Of the twelve children he had with Jane 
// Nicholson, seven survived infancy.
//           </p>
//           <h1>Soruces</h1>
//           <p><a href="/pdf/THOMSON_ALEXANDER_Biography.pdf" download>THOMSON_ALEXANDER_Biography.pdf</a></p>
//         </div>
        

//          <div><Footer resumeData={resumeData}/></div>
//       </section>
      <section id="resume">
        <Header resumeData={resumeData}/>
        <div class="content">
          <div class="content__container">
            <p class="content__container__text">
              Find out more about the
            </p>
            
            <ul class="content__container__list" style={{color:'black',textShadow:'none'}}>
              <li class="content__container__list__item">Architect</li>
              <li class="content__container__list__item">Visionary</li>
              <li class="content__container__list__item">Pioneer</li>
              <li class="content__container__list__item">Glaswegian</li>
            </ul>
          </div>
        </div>

        <img class="resume-image" src="/Images/alex.jpg"/>
        <div class="main" >
            <h1 class='resume-h1'>Thomson, Alexander [Greek]<br/><span>(1817–1875)</span></h1>
            <p id="resumePara1">
                Thomson, Alexander [called Greek Thomson] (1817–1875), architect, was born on 9 April 1817 at Endrick 
                Cottage, Balfron, Stirlingshire, the seventeenth of the twenty children of John Thomson (1757/8–1824), 
                bookkeeper at Kirkman and Findlay's cotton spinning mill at Balfron, and the ninth of his second wife, 
                Elizabeth Cooper (d. 1830), whose father, George Cooper, was a schoolmaster in Aberdeen and whose 
                brother became the Burgher minister in Balfron. John Thomson's widow moved to Glasgow with her 
                younger children in 1825 and Alexander eventually began work in a writer's office before his talent as a 
                draughtsman was noticed by the Glasgow architect Robert Foote, who took him as an apprentice. Thomson
                then worked in the office of the architect John Baird I (1798–1859), with whom he stayed for about ten years, becoming his chief draughtsman. In 1847, in a joint ceremony, Thomson and the unrelated John 
                Baird II (1816–1893) married Jane Nicholson (1825–1899) and Jessie Nicholson (1827–1866), daughters of 
                the London architect Michael Angelo Nicholson (1794–1841) [see under Nicholson, Peter (1765-1844)].
           </p>
        </div>
        <section class="timeline">
          <ul>
            <li>
              <div>
                <time>1848</time> 
                Thomson set up in independent practice in Glasgow in 1848, when he entered into partnership with his 
                brother-in-law John Baird II. This partnership was amicably terminated in 1857, when Thomson was 
                joined by his younger brother George (1819–1878), who was an architect who had also worked in the office 
                of John Baird I. In 1871 George left Glasgow to work as a missionary in the Cameroons, and in 1873 
                Thomson took Robert Turnbull (1839–1905) as a partner; the firm became known as A. and G. Thomson 
                and Turnbull.
              </div>
            </li>
            <li>
              <div>
                <time>1856</time> 
                Baird and Thomson began by building villas in the new suburbs of Glasgow and along the Clyde estuary; 
                these were designed in a variety of styles, including the Gothic and Romanesque. However, by the 
                mid-1850s Thomson had developed the refined and abstracted Grecian manner with which he would 
                become associated. This was employed for his unique double villa in Langside, Glasgow (1856–7), in which 
                two identical semi-detached houses faced in opposite directions, and in Holmwood House in Cathcart, 
                near Glasgow (1857–8), his finest villa, built for the paper manufacturer James Couper. Thomson's first 
                biographer, the Glasgow architect Thomas Gildard, wrote of Holmwood that, 'If architecture be poetry in 
                stone-and-lime—a great temple an epic—this exquisite little gem, at once classic and picturesque, is as 
                complete, self-contained, and polished as a sonnet', recognizing that he had done something 
                unprecedented (Gildard). Although he was influenced by the neo-classical work of the Prussian state 
                architect Karl Friedrich Schinkel, Thomson would seem to have been the first to apply picturesque 
                principles of composition to the Greek style in his villas. Holmwood was also remarkable for its scheme of 
                interior painted decoration, all designed by the architect along with furniture, carpets, and other 
                furnishings.
              </div>
            </li>
            <li>
              <div>
                <time>1856</time> 
                Thomson came to reject the use of the arch, whether pointed or round, and held that the trabeated 
                language of the Greeks could be the basis of a modern architecture which incorporated iron construction, 
                arguing that 'Stonehenge is really more scientifically constructed than York Minster' (An inquiry as to the 
                appropriateness of the Gothic style for the proposed buildings for the University of Glasgow, Proceedings of 
                the Glasgow Architectural Society, 6–7, 1865–7, 47; repr. in Stamp, Lectures, 67). He was never, however, a 
                conventional Greek revivalist, and his work was conspicuous for the originality with which he adapted and 
                combined precedents from Greece, Egypt, and elsewhere. For all his admiration of such buildings as 
                Thomas Hamilton's Royal High School in Edinburgh, he argued that the promoters of the Greek revival had 
                failed, 'because they could not see through the material into the laws upon which that architecture rested. 
                They failed to master their style, and so became its slaves' (Art and Architecture, 1874, 8; repr. in Stamp, 
                Lectures, 147). He was insistent that
              </div>
            </li>
            <li>
              <div>
                <time></time> 
                architecture in its highest forms does not bear the least resemblance to anything in nature, that it 
                is peculiarly and exclusively a human work; and yet, long before man came to need it, long before 
                the foundation of the world, at the very beginning, in the councils of eternity, the laws which 
                regulate this art were framed.Presidential address to the Glasgow Institute of Architects, The 
                Architect, 15 April 1871, 198; repr. in Stamp, Lectures, 101

              </div>
            </li>
            <li>
              <div>
                <time></time> 
                In this insistence upon eternal laws Thomson's approach to architecture verged on the mystical, and, as a 
                devout Presbyterian, he was strongly influenced by the paintings and engravings of John Martin, which 
                depicted the exotic architecture of the cities of the Old Testament with a remorseless horizontality receding 
                towards infinity. Yet, from such images, he evolved a successful modern commercial architecture for 
                Glasgow. More than any other architect, Thomson gave a distinct character to the second city of the British 
                empire in his designs for warehouses and commercial buildings, and for terraces of houses and tenements. 
                In all these he arrived at novel treatments for urban façades, in which depth and variety were achieved by 
                the unusual arrangements of trabeated masonry combined with large windows of plate glass. The tragedy, 
                however, is that for all his admiration of the 'imperishable thought' of the Egyptians, Thomson's
                achievement was constructed of weak and friable Giffnock sandstone.
              </div>
            </li>
            <li>
              <div>
                <time></time> 
                Thomson's commercial designs included Grecian Buildings in Sauchiehall Street (1867–8), the Cairney 
                Building in Bath Street (1860–61; dem.), the block in Gordon Street which he owned with his brother 
                (1859; altered), and Egyptian Halls in Union Street (1870–72), which the London-based Architect noted was 
                in Mr Thomson's well-known “Egyptian-Greek” style—a style which he has made his own, and in which 
                he has no rival' (The Architect, 13 July 1872). Thomson's domestic work included Moray Place in 
                Strathbungo (1859–61), where the architect himself lived from 1861 until his death, Eton Terrace in 
                Oakfield Avenue (1862–4), and Great Western Terrace (1867–77), arguably the finest in the city in its 
                grandeur and austerity. Gildard said of it that 'the windows have no dressings, but Greek goddesses could 
                afford to appear undressed' (Gildard). Queen's Park Terrace in Eglinton Street (1856–60; dem.) was highly 
                influential on the design of Glasgow's many tenements.
              </div>
            </li>
            <li>
              <div>
                <time></time> 
                In addition, Thomson designed monumental urban churches for United Presbyterian congregations, which 
                the American historian Henry Russell Hitchcock considered were 'three of the finest Romantic Classical 
                churches in the world' (Hitchcock, 63). Of these, the only intact survivor is the St Vincent Street Church 
                (1857–9), with its tall and exotic steeple. In this building, stone construction was combined with cast-iron 
                columns and large sheets of glazing were applied directly to the masonry. Thomson's first church, the 
                Caledonia Road Church (1855–7), was gutted by fire in 1965. His most extraordinary and innovative 
                ecclesiastical building, the Queen's Park Church (1868–9), was Scotland's worst architectural loss of the 
                Second World War; its richly decorated interior moved the painter Ford Madox Brown to exclaim 'Well 
                done Glasgow!' and to put it 'above everything I have seen in modern Europe' (Glasgow Evening Times, 9 
                Oct 1893).
              </div>
            </li>
            <li>
              <div>
                <time></time> 
                Owing to the loss of most of his drawings (a few remain in the Mitchell Library in Glasgow) and all of his 
                professional papers, it is not possible to catalogue the whole range of Thomson's artistic activity. What is 
                clear is that his career was to some extent paradoxical as, for all his intense idealism, Thomson was a 
                successful commercial architect willing, on occasion, to employ the styles of which he theoretically 
                disapproved. It also must be admitted that his insistence on such features as low-pitched roofs was not 
                always wholly practical in the climate of the west of Scotland. It is clear, however, that contemporaries 
                regretted that he was never awarded a commission for a public building commensurate with his talents. 
                Thomson's designs for the Albert Memorial in London and for the South Kensington Museum must have 
                seemed unfashionable in England to the point of perversity in the 1860s and only Glasgow, perhaps, could 
                allow his idiosyncratic approach to flourish. Yet he was denied the opportunity of submitting a design for the new buildings on Gilmorehill for the University of Glasgow when the commission was awarded, 
                without competition, to the London architect George Gilbert Scott. Thomson ridiculed the universalist 
                claims of the Gothic revival in general and Scott's design in particular in his published lecture of 1866.
              </div>
            </li>
            <li>
              <div>
                <time></time> 
                Thomson was much involved in the affairs of the Glasgow Architectural Society and the Glasgow Institute 
                of Architects, and served as president of both. In 1874 he delivered four lectures on art and architecture to 
                the Glasgow School of Art and Haldane Academy; these covered the creations of the Egyptians, Greeks, and 
                Romans and essentially constituted his architectural testament. Further lectures on medieval architecture 
                were planned but never delivered owing to Thomson's death, from asthma and heart failure, at his home at 
                1 Moray Place, Strathbungo, on 22 March 1875. He had been ill for some years and increasingly delegated 
                his professional practice to Turnbull. Had he survived the severe winter of 1874–5, Thomson planned to 
                make his first ever trip abroad, to Italy, to recover his health.
              </div>
            </li>
            <li>
              <div>
                <time></time> 
                Thomson's achievement was widely recognized at the time of his death and a memorial fund was 
                established. This was used to present a marble bust of the architect, carved by his friend the sculptor John 
                Mossman, to the Glasgow corporation galleries in 1877, and to endow a travelling studentship, awarded 
                first in 1887, to the architect and historian William J. Anderson, and second, three years later, to Charles 
                Rennie Mackintosh.
              </div>
            </li>
            <li>
              <div>
                <time>His pupil (William?) Clunas later recorded that</time> 
              </div>
            </li>
            <li>
              <div>
                <time></time> 
                Alexander Thomson was, in appearance, a distinguished-looking man, of a good average height, 
                stout, well and proportionally made, a fine manly countenance with a profuse head of hair … for 
                the strictly professional side of his business he had but little capacity—punctual, he was not, 
                neither was he persevering. You could not say he was indolent, but there was a dreamy unrest 
                about him even when engaged on important work which caused matter-of-fact people who were 
                waiting for further details some annoyance. But when he did plunge into a piece of work his 
                attitude was that of a real devotee—patient, forceful, and painstaking.
              </div>
            </li>
            <li>
              <div>
                
                Despite this, his estate was valued for Scottish inventory duty at £15,395 5s. 3d. He was buried in the 
                Southern Necropolis in Glasgow; the plot is now unmarked. Of the twelve children he had with Jane 
                Nicholson, seven survived infancy.
              </div>
            </li>
            
          </ul>
        </section>
      </section>
      
    );
  }
}

