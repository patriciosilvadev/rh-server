const routes = require('express').Router();

const cargo = require('./cargo');
const centroDeCusto = require('./centroDeCusto');
const contador = require('./contador');
const departamento = require('./departamento');
const sindicato = require('./sindicato');
const colaborador = require('./colaborador');
const periodoExperiencia = require('./periodoExperiencia');
const evento = require('./evento');
const lembrete = require('./lembrete');
const recado = require('./recado');
const endereco = require('./endereco');
const jornadaTrabalho = require('./jornadaTrabalho');
const vinculo = require('./vinculo');
const formaPagamento = require('./formaPagamento');
const contato = require('./contato');
const copiaDocumento = require('./copiaDocumento');
const checklist = require('./checkList');
const dependente = require('./dependente');
const banco = require('./banco');
const escolaridade = require('./escolaridade');
const beneficio = require('./beneficio');
const holerite = require('./holerite');
const fechamentoFolha = require('./fechamentoFolha');
const configuracao = require('./configuracao');
const feriado = require('./feriado');
const empresa = require('./empresa');
const cobranca = require('./cobranca');
const companhia = require('./companhia');
const usuario = require('./usuario');
const anotacao = require('./anotacao');
const ferias = require('./ferias');
const salario = require('./salario');
const falta = require('./falta');
const valorRecorrente = require('./valorRecorrente');
const colaboradorBeneficio = require('./colaborador-beneficio');
const configuracaoSindicato = require('./configuracao-sindicato');
const minuta = require('./minuta');
const desligamento = require('./desligamento');
const relatorio = require('./relatorios');
const auth = require('./auth');
const defaultValues = require('./default-values')

routes.get('/cargos/:id', cargo.findById);
routes.get('/cargos', cargo.list);
routes.post('/cargos', cargo.save);
routes.put('/cargos', cargo.update);
routes.delete('/cargos/:id', cargo.delete);

routes.get('/departamentos/:id', departamento.findById);
routes.get('/departamentos', departamento.list);
routes.post('/departamentos', departamento.save);
routes.put('/departamentos', departamento.update);
routes.delete('/departamentos/:id', departamento.delete);

routes.get('/centrodecustos/:id', centroDeCusto.findById);
routes.get('/centrodecustos', centroDeCusto.list);
routes.post('/centrodecustos', centroDeCusto.save);
routes.put('/centrodecustos', centroDeCusto.update);
routes.delete('/centrodecustos/:id', centroDeCusto.delete);

routes.get('/sindicatos/:id', sindicato.findById);
routes.get('/sindicatos', sindicato.list);
routes.post('/sindicatos', sindicato.save);
routes.put('/sindicatos', sindicato.update);
routes.delete('/sindicatos/:id', sindicato.delete);


routes.get('/colaboradores/quantidade', colaborador.qtdColaboradores);
routes.get('/colaboradores/:id', colaborador.findById);
routes.get('/colaboradores', colaborador.list);
routes.post('/colaboradores', colaborador.save);
routes.put('/colaboradores', colaborador.update);
routes.delete('/colaboradores/:id', colaborador.delete);

routes.get('/contadores/:id', contador.findById);
routes.get('/contadores', contador.list);
routes.post('/contadores', contador.save);
routes.put('/contadores', contador.update);
routes.delete('/contadores/:id', contador.delete);

routes.get('/periodo-experiencias/:id', periodoExperiencia.findById);
routes.get('/periodo-experiencias', periodoExperiencia.list);
routes.post('/periodo-experiencias', periodoExperiencia.save);
routes.put('/periodo-experiencias', periodoExperiencia.update);
routes.delete('/periodo-experiencias/:id', periodoExperiencia.delete);

routes.get('/eventos/:id', evento.findById);
routes.get('/eventos', evento.list);
routes.post('/eventos', evento.save);
routes.put('/eventos', evento.update);
routes.delete('/eventos/:id', evento.delete);

routes.get('/lembretes/:id', lembrete.findById);
routes.get('/lembretes', lembrete.list);
routes.post('/lembretes', lembrete.save);
routes.put('/lembretes', lembrete.update);
routes.delete('/lembretes/:id', lembrete.delete);

routes.get('/recados/:id', recado.findById);
routes.get('/recados', recado.list);
routes.post('/recados', recado.save);
routes.put('/recados', recado.update);
routes.delete('/recados/:id', recado.delete);

routes.get('/enderecos/:id', endereco.findById);
routes.get('/enderecos', endereco.list);
routes.post('/enderecos', endereco.save);
routes.put('/enderecos', endereco.update);
routes.delete('/enderecos/:id', endereco.delete);

routes.get('/escolaridades/:id', escolaridade.findById);
routes.get('/escolaridades', escolaridade.list);
routes.post('/escolaridades', escolaridade.save);
routes.put('/escolaridades', escolaridade.update);
routes.delete('/escolaridades/:id', escolaridade.delete);

routes.get('/bancos/:id', banco.findById);
routes.get('/bancos', banco.list);
routes.post('/bancos', banco.save);
routes.put('/bancos', banco.update);
routes.delete('/bancos/:id', banco.delete);

routes.get('/jornadas-trabalho/:id', jornadaTrabalho.findById);
routes.get('/jornadas-trabalho', jornadaTrabalho.list);
routes.post('/jornadas-trabalho', jornadaTrabalho.save);
routes.put('/jornadas-trabalho', jornadaTrabalho.update);
routes.delete('/jornadas-trabalho/:id', jornadaTrabalho.delete);

routes.get('/vinculos/:id', vinculo.findById);
routes.get('/vinculos', vinculo.list);
routes.post('/vinculos', vinculo.save);
routes.put('/vinculos', vinculo.update);
routes.delete('/vinculos/:id', vinculo.delete);

routes.get('/holerites/:id', holerite.findById);
routes.get('/holerites', holerite.list);
routes.post('/holerites', holerite.save);
routes.put('/holerites', holerite.update);
routes.delete('/holerites/:id', holerite.delete);

routes.get('/forma-pagamentos/:id', formaPagamento.findById);
routes.get('/forma-pagamentos', formaPagamento.list);
routes.post('/forma-pagamentos', formaPagamento.save);
routes.put('/forma-pagamentos', formaPagamento.update);
routes.delete('/forma-pagamentos/:id', formaPagamento.delete);

routes.get('/contatos/:id', contato.findById);
routes.get('/contatos', contato.list);
routes.post('/contatos', contato.save);
routes.put('/contatos', contato.update);
routes.delete('/contatos/:id', contato.delete);
routes.get('/contatos/colaborador/:id', contato.listByColaborador);

routes.get('/copia-documentos/:id', copiaDocumento.findById);
routes.get('/copia-documentos', copiaDocumento.list);
routes.post('/copia-documentos', copiaDocumento.save);
routes.put('/copia-documentos', copiaDocumento.update);
routes.delete('/copia-documentos/:id', copiaDocumento.delete);

routes.get('/checklists/:id', checklist.findById);
routes.get('/checklists', checklist.list);
routes.post('/checklists', checklist.save);
routes.put('/checklists', checklist.update);
routes.delete('/checklists/:id', checklist.delete);
routes.get('/checklists/colaborador/:id', checklist.listByColaborador);


routes.get('/dependentes/:id', dependente.findById);
routes.get('/dependentes', dependente.list);
routes.post('/dependentes', dependente.save);
routes.put('/dependentes', dependente.update);
routes.delete('/dependentes/:id', dependente.delete);
routes.get('/dependentes/colaborador/:id', dependente.listByColaborador);

routes.get('/beneficios/:id', beneficio.findById);
routes.get('/beneficios', beneficio.list);
routes.post('/beneficios', beneficio.save);
routes.put('/beneficios', beneficio.update);
routes.delete('/beneficios/:id', beneficio.delete);

routes.get('/configuracaos/:id', configuracao.findById);
routes.get('/configuracaos', configuracao.list);
routes.post('/configuracaos', configuracao.save);
routes.put('/configuracaos', configuracao.update);
routes.delete('/configuracaos/:id', configuracao.delete);

routes.get('/feriados/restaure', feriado.restaure);
routes.get('/feriados/:id', feriado.findById);
routes.get('/feriados', feriado.list);
routes.post('/feriados', feriado.save);
routes.put('/feriados', feriado.update);
routes.delete('/feriados/:id', feriado.delete);

routes.get('/fechamento-folhas/calculo/:id', fechamentoFolha.getWithCalc);
routes.get('/fechamento-folhas/:id', fechamentoFolha.findById);
routes.get('/fechamento-folhas', fechamentoFolha.list);
routes.post('/fechamento-folhas/item', fechamentoFolha.saveItem);
routes.put('/fechamento-folhas-itens', fechamentoFolha.updateItens);
routes.post('/fechamento-folhas', fechamentoFolha.save);
routes.put('/fechamento-folhas', fechamentoFolha.update);
routes.delete('/fechamento-folhas/:id', fechamentoFolha.delete);

routes.get('/empresas/:id', empresa.findById);
routes.get('/empresas', empresa.list);
routes.post('/empresas/troca', empresa.trocarEmpresa);
routes.post('/empresas', empresa.save);
routes.put('/empresas', empresa.update);
routes.delete('/empresas/:id', empresa.delete);

routes.get('/cobrancas/:id', cobranca.findById);
routes.get('/cobrancas', cobranca.list);
routes.post('/cobrancas', cobranca.save);
routes.put('/cobrancas', cobranca.update);
routes.delete('/cobrancas/:id', cobranca.delete);

routes.get('/companhias/:id', companhia.findById);
routes.get('/companhias', companhia.list);
routes.post('/companhias', companhia.save);
routes.put('/companhias', companhia.update);
routes.delete('/companhias/:id', companhia.delete);

routes.get('/usuarios/logged', usuario.userLogged);
routes.put('/usuarios/update-password', usuario.updatePassword);
routes.get('/usuarios/:id', usuario.findById);
routes.get('/usuarios', usuario.list);
routes.post('/usuarios', usuario.save);
routes.put('/usuarios', usuario.update);
routes.delete('/usuarios/:id', usuario.delete);

routes.get('/anotacoes/:id', anotacao.findById);
routes.get('/anotacoes', anotacao.list);
routes.post('/anotacoes', anotacao.save);
routes.put('/anotacoes', anotacao.update);
routes.delete('/anotacoes/:id', anotacao.delete);

routes.get('/ferias/:id', ferias.findById);
routes.get('/ferias', ferias.list);
routes.post('/ferias', ferias.save);
routes.put('/ferias/enviar-para-contabilidade', ferias.enviarParaContabilidade);
routes.put('/ferias', ferias.update);
routes.delete('/ferias/:id', ferias.delete);

routes.get('/salarios/:id', salario.findById);
routes.get('/salarios', salario.list);
routes.post('/salarios', salario.save);
routes.put('/salarios', salario.update);
routes.delete('/salarios/:id', salario.delete);

routes.get('/faltas/:id', falta.findById);
routes.get('/faltas', falta.list);
routes.post('/faltas', falta.save);
routes.put('/faltas', falta.update);
routes.delete('/faltas/:id', falta.delete);

routes.get('/valores-recorrentes/:id', valorRecorrente.findById);
routes.get('/valores-recorrentes', valorRecorrente.list);
routes.post('/valores-recorrentes', valorRecorrente.save);
routes.put('/valores-recorrentes', valorRecorrente.update);
routes.delete('/valores-recorrentes/:id', valorRecorrente.delete);

routes.post('/colaboradores-beneficios', colaboradorBeneficio.save);
routes.put('/colaboradores-beneficios/all', colaboradorBeneficio.updateAll);
routes.put('/colaboradores-beneficios', colaboradorBeneficio.update);

routes.get('/configuracoes-sindicatos', configuracaoSindicato.list);
routes.post('/configuracoes-sindicatos', configuracaoSindicato.save);
routes.delete('/configuracoes-sindicatos/:id', configuracaoSindicato.delete);

routes.get('/minutas/:id', minuta.findById);
routes.get('/minutas', minuta.list);
routes.post('/minutas', minuta.save);
routes.put('/minutas', minuta.update);
routes.delete('/minutas/:id', minuta.delete);

routes.get('/desligamentos/:id', desligamento.findById);
routes.get('/desligamentos', desligamento.list);
routes.post('/desligamentos', desligamento.save);
routes.put('/desligamentos', desligamento.update);
routes.delete('/desligamentos/:id', desligamento.delete);

routes.get('/relatorios/aniversarios', relatorio.aniversario);
routes.get('/relatorios/dados-bancarios', relatorio.dadosBancarios);
routes.get('/relatorios/contatos', relatorio.contatos);
routes.get('/relatorios/dependentes', relatorio.dependentes);
routes.get('/relatorios/colaboradoes-vinculos', relatorio.colaboradoresPorVinculo);
routes.get('/relatorios/gestores', relatorio.gestores);
routes.get('/relatorios/tempos-casas', relatorio.tempoDeCasa);
routes.get('/relatorios/anotacoes', relatorio.anotacoes);
routes.get('/relatorios/atualizacoes-cargos-salarios', relatorio.atualizacaoCargosESalarios);
routes.get('/relatorios/admissoes', relatorio.admissoes);
routes.get('/relatorios/desligamentos', relatorio.desligamentos);



routes.get('/tipos-adicionais-sindicatos', defaultValues.listTipoAdicionalSindicato);
routes.get('/calculos-proporcionalidades', defaultValues.listCalculoProporcionalidade);
routes.get('/calculos-saldos-beneficios', defaultValues.listCalculoSaldoBeneficio);
routes.get('/categorias-beneficios', defaultValues.listCategoriaBeneficio);
routes.get('/categorias-anotacoes', defaultValues.listCategoriaAnotacao);
routes.get('/cores-racas', defaultValues.listCorRaca);
routes.get('/sexos', defaultValues.listSexo);
routes.get('/estados-civis', defaultValues.listEstadoCivil);
routes.get('/motivos-alteracoes-salarios', defaultValues.listMotivoAlteracaoSalario);
routes.get('/motivos-faltas-afastamentos', defaultValues.listMotivoFaltaAfastamento);
routes.get('/tipos-faltas-afastamentos', defaultValues.listTipoFaltaAfastamento);
routes.get('/categorias-lembretes', defaultValues.listCategoriaLembrete);
routes.get('/periodos-recorrencias', defaultValues.listPeriodoRecorrenciaLembrete);
routes.get('/relacoes-contatos', defaultValues.listRelacaoContato);
routes.get('/relacoes-dependentes', defaultValues.listRelacaoDependente);
routes.get('/tipos-avisos-previos', defaultValues.listTipoAvisoPrevio);
routes.get('/tipos-desligamentos', defaultValues.listTipoDesligamento);
routes.get('/tipos-calculos-horas-extras', defaultValues.listTipoCalculoHoraExtra);
routes.get('/niveis-escolaridades', defaultValues.listNivelEscolaridade);
routes.get('/tipos-holerites', defaultValues.listTipoHolerite);
routes.get('/tipos-proventos', defaultValues.listTipoProvento);
routes.get('/tipos-recados', defaultValues.listTipoRecado);
routes.get('/parcelas-decimos-terceiros', defaultValues.listParcelasDecimoTerceiro);



routes.post('/login', auth.login);

module.exports = routes;
