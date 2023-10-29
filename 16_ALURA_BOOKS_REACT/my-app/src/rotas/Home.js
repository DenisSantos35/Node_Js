import Header from '../componemtes/Header';
import styled from 'styled-components'
import Pesquisa from '../componemtes/Pesquisa';
import UltimosLancamentos from '../componemtes/UltimosLancamentos';

const AppContainer = styled.div`
    width:100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002f52 35%,#326589 100%);
`

function Home() {
  return (
    <AppContainer>
      <Pesquisa/>
      <UltimosLancamentos/>
    </AppContainer>
  );
}

export default Home
