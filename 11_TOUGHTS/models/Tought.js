const { DataTypes, Sequelize } = require('sequelize')
const db = require('../db/conn')

//user

/*
    const Tought = db.define('Tought',{: Aqui, você está criando um modelo de dados chamado "Tought" usando a função define fornecida pelo Sequelize. Tought será o nome da tabela no banco de dados que corresponde a este modelo.
    title: {: Isso inicia a definição dos campos (ou atributos) do modelo. No seu caso, há um único campo chamado "title."
    type: DataTypes.STRING,: Aqui, você está definindo o tipo de dados do campo "title" como uma string. Isso significa que esse campo conterá texto (cadeias de caracteres).
    allowNull: false,: Isso define a restrição de que o campo "title" não pode ser nulo. Isso garante que um valor válido seja sempre fornecido para esse campo.
    require: true: Parece que há um erro de digitação aqui. Deveria ser required: true. Essa opção indicaria que o campo "title" é obrigatório, o que é uma redundância, já que allowNull: false já define que o campo não pode ser nulo.

    Definir outros campos e seus tipos de dados, como DataTypes.INTEGER, DataTypes.DATE, etc.
    Especificar as opções de validação para os campos, como validate para adicionar regras personalizadas de validação.
    Adicionar relacionamentos com outros modelos, como associações de um-para-um, um-para-muitos ou muitos-para-muitos.
    Definir opções de nomenclatura da tabela, como tableName para especificar um nome de tabela personalizado no banco de dados.
    Configurar gatilhos (hooks) para executar código antes ou após a criação, atualização ou exclusão de registros no banco de dados.
    Especificar opções de configuração avançadas, como timestamps para controlar automaticamente campos de data e hora de criação e atualização.


*/
const User = require('./User')

const Tought = db.define('Tought',{
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },
});

Tought.belongsTo(User) // um pensamento pertence a um usuário
User.hasMany(Tought) //um usuário contem vários pensamentos

module.exports = Tought


