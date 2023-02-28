import React, { FormEvent, useEffect, useState } from "react"
import { FiChevronRight } from "react-icons/fi"
import { Link } from "react-router-dom"

import logoImg from "../../../assets/logo.svg"
import api from "../../../services/api"
import { Title, Form, Repositories, Error } from "./styles"

interface Repository {
    full_name: string
    description: string
    owner: {
        login: string
        avatar_url: string
    }
}

const Dashboard: React.FC = () => {
    const [newRepository, setNewRepository] = useState("")
    const [inputError, setInputError] = useState("")
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem("@GithubExplorer:repositories")

        if (storagedRepositories) {
            return JSON.parse(storagedRepositories)
        }

        return []
    })

    useEffect(() => {
        localStorage.setItem("@GithubExplorer:repositories", JSON.stringify(repositories))
    }, [repositories])

    async function handleAddRepository(event: FormEvent):Promise<void> {
        event.preventDefault()

        if (!newRepository) {
            setInputError("Type the author's name/repository")
            return
        }

        try {
            const response = await api.get<Repository>(`repos/${newRepository}`)
            const repository = response.data
    
            setRepositories([...repositories, repository])
            setNewRepository("")
            setInputError("")
        } catch(err) {
            setInputError("Error finding this name/repository")
        }
    }

    return (
        <>
            <img src={logoImg} alt="Github explorer logo" />
            <Title>Explore Github repositories</Title>

            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input 
                    placeholder="Type your repository name"
                    value={newRepository}
                    onChange={(event) => setNewRepository(event.target.value)} 
                />
                <button type="submit">Search</button>
            </Form>

            { inputError && <Error>{inputError}</Error> }

            <Repositories>
                {repositories.map(repository => (
                    <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
                        <img 
                            src={repository.owner.avatar_url} 
                            alt={repository.owner.login} 
                        />

                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>

                        <FiChevronRight />
                    </Link>
                ))}
            </Repositories>
        </>
    )
}

export default Dashboard
