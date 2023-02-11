import { Text } from "../index.js";
import Icon from "../Icon.jsx";

const ListOfRequiredDocuments = () => {
  const UploadDocument = ({ title }) => {
    return (
      <div className="flex justify-between items-center py-3 px-10 w-[400px] bg-pGray-400 hover:bg-white hover:text-red-500">
        <Text className="text-xs font-light">{title}</Text>
        <Icon purpose="upload" className="cursor-pointer text-[#797979]" />
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-start items-center mt-10">
      <div className="w-20 h-20 bg-red-200 flex items-center justify-center">
        Logo
      </div>

      <Text className="text-sm text-pGray-900">Upload your logo</Text>

      <Text className="text-xs text-pGray-900">
        PNG Format, Min. 500x500 px
      </Text>

      <div className="flex flex-col gap-2 justify-start items-center mt-10 w-[600px] border border-pBorder-100 rounded-lg bg-pBorder-400">
        <div className="flex justify-start items-center py-3 w-full bg-pBorder-500 rounded-r-lg border-b border-pBorder-100">
          <Text className="w-full text-center">Üye İşyeri Tipi</Text>
          <Text className="w-full text-center">Ticari Şirket</Text>
        </div>

        <Text>Gerekli Evrak Listesi</Text>

        <div className="border border-pBorder-100 divide-y divide-pBorder-100  rounded-b mb-3">
          <UploadDocument title="Ticari Sicil Tasdiknamesi" />

          <UploadDocument title="Ticaret Odası Faaliyet Belgesi" />

          <UploadDocument title="Vergi Levhası Fotokopisi" />

          <UploadDocument title="İmza Sirküleri Fotokopisi" />

          <UploadDocument title="Nüfus Cüzdanı Fotokopisi (imzaya yetkili kişinin)" />

          <UploadDocument title="Sözleşme" />

          <UploadDocument title="Restoran Menü Fotoğrafı" />

          <UploadDocument title="Restoran Tabela Fotoğrafı" />

          <Text className="bg-pBorder-300 rounded-b text-center text-white py-2 hover:bg-gray-500 cursor-pointer">
            Seçilen Dosyaları/Logoyu Yükle
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ListOfRequiredDocuments;
