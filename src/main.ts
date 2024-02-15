const base_url: string = "https://cdn.libercapital.com.br/libs/acquirers/assets";

export interface AcquirerScheme {
  document_number: string;
  document_formatted: string;
  display_name: string;
  legal_name: string;
  icon?: string;
}

const list: readonly AcquirerScheme[] = [
  {
    document_number: "26586979000115",
    display_name: "ACQIO",
    legal_name: "ACQIO FRANCHISING S.A.",
    document_formatted: "26.586.979/0001-15",
    icon: `${base_url}/acqio.png`,
  }, {
    document_number: "20520298000178",
    display_name: "ADIQ",
    legal_name: "ADIQ INSTITUICAO DE PAGAMENTO S.A.",
    document_formatted: "20.520.298/0001-78",
    icon: `${base_url}/adiq.png`,
  }, {
    document_number: "20520298000178",
    display_name: "ADIQ",
    legal_name: "ADIQ INSTITUICAO DE PAGAMENTO S.A.",
    document_formatted: "20.520.298/0001-78",
    icon: `${base_url}/adiq.png`,
  }, {
    document_number: "17887874000105",
    display_name: "Entrepay",
    legal_name: "Entrepay Servicos de Pagamento S.A.",
    document_formatted: "17.887.874/0001-05",
  }, {
    document_number: "08561701000101",
    display_name: "PagSeguro",
    legal_name: "PAGSEGURO INTERNET S.A.",
    document_formatted: "08.561.701/0001-01",
    icon: `${base_url}/pagseguro.png`,
  }, {
    document_number: "16501555000157",
    display_name: "Stone",
    legal_name: "Stone Pagamentos S.A",
    document_formatted: "16.501.555/0001-57",
    icon: `${base_url}/stone.png`,
  }, {
    document_number: "10440482000154",
    display_name: "Getnet",
    legal_name: "Getnet Adquirencia e Serviços para Meios de Pagamento S/A",
    document_formatted: "10.440.482/0001-54",
    icon: `${base_url}/getnet.png`,
  }, {
    document_number: "01027058000191",
    display_name: "Cielo",
    legal_name: "CIELO S.A",
    document_formatted: "01.027.058/0001-91",
    icon: `${base_url}/cielo.png`,
  }, {
    document_number: "01425787000104",
    display_name: "Rede",
    legal_name: "Redecard S.A",
    document_formatted: "01.425.787/0001-04",
    icon: `${base_url}/rede.png`,
  }, {
    document_number: "32270608000122",
    display_name: "Safra",
    legal_name: "Safrapay Instituicao de Pagamento LTDA.",
    document_formatted: "32.270.608/0001-22",
    icon: `${base_url}/safra.png`,
  }, {
    document_number: "92934215000106",
    display_name: "Vero",
    legal_name: "Banrisul Soluções em Pagamentos S.A. - Instituição de Pagamento",
    document_formatted: "92.934.215/0001-06",
    icon: `${base_url}/vero.png`,
  }, {
    document_number: "27991450000140",
    display_name: "Unica",
    legal_name: "TRIPAG MEIOS DE PAGAMENTO LTDA",
    document_formatted: "27.991.450/0001-40",
    icon: `${base_url}/unica.png`,
  },
];

export default list;
