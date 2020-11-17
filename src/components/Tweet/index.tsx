import React from 'react';

import { 
    Container, 
    Retweeted,
    Body,
    Avatar, 
    Content,
    Header,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon,

} from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
              Você retweetou
          </Retweeted>

          <Body>
              <Avatar />
              <Content>
                  <Header>
                      <strong>Arthur Machado</strong>
                      <span>@ArthurMachado__</span>
                      <Dot />
                      <time>16 de nov</time>
                  </Header>

                  <Description>
                      Esse é meu tweet
                  </Description>

                  <ImageContent />

                  <Icons>
                      <Status>
                          <CommentIcon />
                          200
                      </Status>

                      <Status>
                          <RetweetIcon />
                          200
                      </Status>

                      <Status>
                          <LikeIcon />
                          999
                      </Status>

                  </Icons>
              </Content>
          </Body>
      </Container>
  );
}

export default Tweet;