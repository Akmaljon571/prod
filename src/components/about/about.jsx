import madaniyatV1 from '../../video/1772591765.mp4';
import oqishV2 from '../../video/1772591765.mp4';
import madaniyatP1 from '../../img/photo_2023-10-17_02-48-14.jpg';
import oqishP2 from '../../img/photo_2023-10-17_02-48-14.jpg';
import { useParams } from 'react-router-dom';
import './about.scss';

function About() {
  const { id } = useParams();
  const page = id === 'madaniyat';

  return (
    <div className="about">
      <video
        controls
        className="about-video"
        style={{ width: '100%', height: '560px' }}
        poster={page ? madaniyatP1 : oqishP2}
        src={page ? madaniyatV1 : oqishV2}
      ></video>
      <h2>Shunaqa Shunaqa</h2>
      <div className="about-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
        suscipit, est itaque labore non doloribus quam rem minima beatae
        corporis, perspiciatis consequatur, commodi dolore temporibus cum
        voluptatibus repellendus. <br /> Deserunt, velit. Id error nisi eveniet
        sequi voluptatum enim, aspernatur repellendus animi nesciunt
        perspiciatis tenetur est blanditiis omnis modi voluptatem asperiores
        minus rem quis alias rerum magni beatae tempore fugit? Culpa pariatur
        adipisci reiciendis maiores sunt iusto odit totam, est nostrum veritatis
        omnis, perferendis aliquid odio dolores perspiciatis fugit optio quidem{' '}
        <br /> hic libero beatae deserunt eos praesentium suscipit! Blanditiis
        maiores, at expedita itaque minima asperiores perspiciatis reiciendis
        alias hic? Veritatis officia et nisi praesentium facilis laudantium cum
        maiores fugit perspiciatis voluptatibus corporis, obcaecati distinctio
        numquam minima sapiente ab ipsum dicta magnam vel quo, earum rerum?{' '}
        <br /> Sint ullam harum libero laborum accusantium quia recusandae at
        quis, ex, animi quaerat assumenda ut vitae aliquam, itaque odio? At
        quisquam quam, nam perferendis exercitationem illo fugit error corporis
        animi accusantium dignissimos aliquid non neque iusto nesciunt porro{' '}
        <br /> itaque. Fuga sit, ab eaque animi, non nam ullam aspernatur
        dolorum, sunt a adipisci necessitatibus unde aperiam voluptas quod dolor
        omnis earum rerum expedita facilis! Rem tenetur ullam deserunt sequi,
        nisi veritatis atque esse! Perspiciatis odit quam atque non.
      </div>
    </div>
  );
}

export default About;
