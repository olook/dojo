require 'spec_helper'

describe ElevadoresVidentes do
   describe "#initialize" do
    it "deve salvar o nome do arquivo" do
      ev=ElevadoresVidentes.new("teste.csv")
      expect(ev.filename).to_not be_nil
    end
  end

 describe "#prever" do
    context "Quando nao ha log" do
      subject {ElevadoresVidentes.new("vazio.csv")}
      it "nao deve se mover" do
        expect(subject.prever(2)).to eq(2) 
      end
    end

    context "Quando ha log" do
      subject {ElevadoresVidentes.new("vazio.csv")}

    end

    context "Quando ha log de menos de uma semana" do
       subject { described_class.new("menos_de_uma_semana.csv") }
       it "nao deve se mover" do
        expect(subject.prever(2)).to eq(2) 
      end
    end
  end

  describe "#obter_registros" do
    context "Quando nao ha registros" do
      subject { described_class.new("vazio.csv") }
      it "retorna array vazio" do
        expect(subject.obter_registros('12:00:001')).to eq []
      end
    end

    context "Quando ha registros (do intervalo e sem ser do intervalo)" do
      subject { described_class.new("vazio.csv") }
      before do
        subject.registros = ['2013-04-17 15:02:00,2'	, '2013-04-17 15:30:00,1']
      end
      it "retorna apenas os registros do intervalo" do
	expect(subject.obter_registros('15:00:00')).to eq ['2013-04-17 15:02:00,2']
      end

    end
  end
end
