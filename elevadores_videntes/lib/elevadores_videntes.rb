require 'time'

class ElevadoresVidentes
  attr_accessor :filename, :registros
  def initialize(filename)
    @filename = filename
  end
  
  def prever(andar_atual)
    andar_atual
  end

  def obter_registros(hora_entrada)
    registros.to_a.select do |item|
      datahora,andar = item.split(',')
      data,hora = datahora.split(' ')
      hora_entrada_convertida = Time.parse(hora_entrada)
      hora = Time.parse(hora)
      hora > hora_entrada_convertida && hora < hora_entrada_convertida + 5*60
    end 
  end
end
