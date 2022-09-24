import { RepositoryItem } from "./RepositoryItem";
import "../styles/repository.scss";
import { useEffect, useState } from "react";

// https://api.github.com/users/KevinAlves55/repos

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setrepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch("https://api.github.com/orgs/rocketseat/repos")
            .then(response => response.json())
            .then(data => setrepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {
                    repositories.map(repository => (
                        <RepositoryItem key={repository.name} repository={repository} />
                    ))
                }
            </ul>
        </section>
    );
};