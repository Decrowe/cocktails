export type MapperFrom<dto, model> = {
  from: (dto: dto) => model;
};
export type MapperTo<model, dto> = {
  to: (model: model) => dto;
};

export type Mapper<dto, model> = MapperFrom<dto, model> & MapperTo<model, dto>;
