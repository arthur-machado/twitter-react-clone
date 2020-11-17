import React from 'react';

import Feed from '../Feed';

import { 
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
              <EditButton outlined>Editar Perfil</EditButton>

              <h1>Arthur Machado</h1>
              <h2>@ArthurMachado__</h2>

              <p>
                  Dunder Mifflin, this is Pam
              </p>

            <ul>
                <li>
                    <LocationIcon />
                    Sapiranga, Brasil
                </li>

                <li>
                    <CakeIcon />
                    Nascido(a) em 22 de novembro de 2001
                </li>
            </ul>

            <Followage>
                <span>
                    Seguindo <strong>100</strong>
                </span>

                <span>
                    <strong>1M </strong> seguidores 
                </span>
            </Followage>
          </ProfileData>

          <Feed />
      </Container>
  );
}

export default ProfilePage;