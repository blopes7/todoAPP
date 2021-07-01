# todoAPP
Tela para registrar tarefas. 
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/style.css">
    <title>Todo app</title>
</head>
<body>
    <main class="container mt-5" role="main">
        
        <h1 class="display-2 text-center text-white">Todo APP</h1>

        <div class="row">
            <div class="col-12 col-lg-8 offset-lg-2">
                <div class="card">
                    <div class="card-body">
                        <form id="tarefa-form">
                            <div class="form-group">
                                <label class="form-label text-primary" for="tarefa-input" >Tarefa:</label>
                                <input type="text" id="tarefa-input" placeholder="Digite sua tarefa" class="form-control">
                                <div class="invalid-feedback">

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-12 col-lg-8 offset-lg-2">
                <div class="card">
                    <div class="card-header">
                        Tarefas adicionadas
                    </div>

                    <ul id="tarefas" class="list-group list-group-flush lista-size overflow-auto">
                        
                        <li class="list-group-item">
                            <div class="form-check d-flex justify-content-between align-items-center">
                                <input type="checkbox" id="tarefa-1" class="form-check-input">
                                <label for="tarefa-1" class="form-check-label">
                                </label>
                                <button class="btn btn-danger">Excluir</button>
                            </div>
                        </li>

                    </ul>
                        
                    <div class="card-footer text-end">
                        <button id="concluir-btn" class="btn btn-primary btn-sm">
                            Concluir as tarefas marcadas
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </main>

    <script src="js/bootstrap.bundle.js"></script>
    <script src="js/application.js"></script>
</body>
</html>
