import { http } from './config'

export default	{

	salvar:(produto)=>{
		return http.post('produto',produto);
  },
    
	atualizar:(produto)=>{
		return http.put('produto',produto);
  },

  listar:()=>{
		return http.get('produtos')
  },
    
	apagar:(produto)=>{
		return http.delete('produto', { data: produto })
	}
}