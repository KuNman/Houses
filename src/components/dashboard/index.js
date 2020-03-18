import React from 'react';
import Tile from '../various/Tile';
import TileHeader from '../various/TileHeader';
import TileUnderHeader from '../various/TileUnderHeader';
import TileContent from '../various/TileContent';
import Button from '../various/Button';
import {useHistory} from 'react-router-dom';
import {LIST} from '../../routes/open';

function Dashboard() {
  const history = useHistory();

  const handleClick = () => {
    history.push(LIST);
  };

  return (
    <div className={'d-flex w-100 h-100 flex-wrap'}>
      <Tile>
        <TileHeader>
          Kilka słów o nas
        </TileHeader>
        <TileUnderHeader>
            Kim jesteśmy
        </TileUnderHeader>
        <TileContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate augue sit amet arcu sollicitudin, quis tincidunt eros molestie. Donec eu vehicula lacus. Nam interdum tincidunt massa, eu luctus justo ultricies nec. Praesent sit amet dui sed elit sollicitudin dignissim. Nulla viverra, sapien vel imperdiet euismod, metus mi ultrices nunc, id laoreet sapien tortor eget purus. Donec ullamcorper cursus dui a pellentesque. Curabitur lobortis ex et nunc faucibus porttitor. Quisque sollicitudin lectus at augue accumsan lobortis.
          </p>
          <p>
            Donec vel odio et leo dignissim interdum non vitae neque. Donec ullamcorper ex eros, vel fermentum tellus ullamcorper a. Cras volutpat orci ipsum, et rhoncus velit pretium in. Duis arcu nulla, congue in vulputate eget, feugiat congue ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam hendrerit sollicitudin ante, et rhoncus odio molestie in.
          </p>
        </TileContent>
        <Button onClick={handleClick}>
          Zobacz więcej
        </Button>
      </Tile>
      <Tile>
        <div className={'d-flex w-100 h-100 flex-wrap'}>
          <Tile themed>b1</Tile>
          <Tile>b2</Tile>
          <Tile>b3</Tile>
          <Tile themed>
            <TileContent fontSize={'8px'}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate augue sit amet arcu sollicitudin, quis tincidunt eros molestie. Donec eu vehicula lacus. Nam interdum tincidunt massa, eu luctus justo ultricies nec. Praesent sit amet dui sed elit sollicitudin dignissim. Nulla viverra, sapien vel imperdiet euismod, metus mi ultrices nunc, id laoreet sapien tortor eget purus. Donec ullamcorper cursus dui a pellentesque. Curabitur lobortis ex et nunc faucibus porttitor. Quisque sollicitudin lectus at augue accumsan lobortis.
              </p>
            </TileContent>
          </Tile>
        </div>
      </Tile>
      <Tile themed>
        <TileHeader fontSize={'18px'}>
          Sed sapien est, ultrices ac ligula sed, vehicula luctus turpis. Ut nec hendrerit ipsum. Nullam at semper tellus. Aliquam et tortor neque. Nulla tempor, nunc non ultricies semper, est tortor fringilla orci, vel efficitur ante metus sed dui. Praesent tempor sem nec massa sodales venenatis. Nulla at ipsum erat. Fusce pellentesque sapien varius, iaculis enim non, aliquet felis. Morbi volutpat sed ante in vehicula. Donec mauris enim, tempor non leo sed, egestas aliquam nunc.
        </TileHeader>
      </Tile>
      <Tile>
        <TileHeader>
          Nasza oferta
        </TileHeader>
        <TileUnderHeader>
            Dowiedz się
        </TileUnderHeader>
        <TileContent>
          <p>
            Proin feugiat augue et egestas euismod. Pellentesque augue velit, tempus varius malesuada a, pretium nec mauris. Mauris sed ex vel ante fringilla rutrum. Donec orci metus, lobortis vitae urna nec, interdum pretium sem. In eu ultricies lacus. Donec sed convallis eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer eget est nibh. Cras non erat neque. Pellentesque euismod turpis id porta porta. Fusce nec sem quam. Sed consequat tellus nec purus
          </p>
          <p>
            Sed porta mi sem, sit amet fermentum lectus hendrerit et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In eu scelerisque metus. Aenean placerat mollis lectus sed condimentum. Aliquam erat volutpat. Ut sed felis eget risus vulputate finibus eu fringilla metus.
          </p>
        </TileContent>
        <Button onClick={handleClick}>
          Zobacz więcej
        </Button>
      </Tile>
    </div>
  );
}

export default Dashboard;
