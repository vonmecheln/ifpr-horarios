import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList = [
  {
    title: 'Fácil de usar',
    Svg: require('@site/static/img/vetor2.svg').default,
    description: (
      <>
        O horário foi projetado desde o início para ser facilmente visualizado e 
        usado por alunos, professores e toda comunidade.
      </>
    ),
  },
  {
    title: 'Foco na praticidade',
    Svg: require('@site/static/img/vetor1.svg').default,
    description: (
      <>
        O horário é focado na praticidade para consulta do dia-a-dia.
        Verifique a distribuição de aulas por <code>turmas</code>, 
        <code>professores</code> e <code>cursos</code>.
      </>
    ),
  },
  {
    title: 'Produzido pelo IFPR',
    Svg: require('@site/static/img/vetor10.svg').default,
    description: (
      <>
        Um trabalho feito em equipe por docentes do campus Assis Chateaubriand 
        com muito esmero e carinho.
      </>
    ),
  },
  {
    title: 'Melhorias constantes',
    Svg: require('@site/static/img/vetor9.svg').default,
    description: (
      <>
        O horário está em constante melhoria, adaptando-se da melhor maneira as mudanças 
        de rotina do campus .
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
