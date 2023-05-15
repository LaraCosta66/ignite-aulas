import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "Repositorio 1",
  description: "Forms in react",
  link: "https://github.com/LaraCosta66/Fundamentos-ReactJS/blob/main/src/components/Card/index.jsx",
};
export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
