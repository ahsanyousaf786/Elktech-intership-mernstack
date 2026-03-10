

export const PokemonCards = ({ pokemonData }) => {

  const { name,
    height,
    weight,
    sprites,
    types,
    stats,
    abilities,
    base_experience, } = pokemonData;

  const image = sprites.other.dream_world.front_default;
  const typeNames = types.map((curType) => curType.type.name).join(", ");
  const speed = stats[5].base_stat;
  const attack = stats[1].base_stat;
  const ability = abilities
    .map((abilityInfo) => abilityInfo.ability.name)
    .slice(0, 1)
    .join(", ");


  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={image}
          alt={name}
          className="pokemon-image"
        />
      </figure>
      <h1 className="pokemon-name">{name}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>
          {typeNames}
        </p>
      </div>

      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span> Height:</span> {height}
        </p>
        <p className="pokemon-info">
          <span> Weight:</span> {weight}
        </p>
        <p className="pokemon-info">
          <span> speed:</span> {speed}
        </p>
      </div>

      <div className="grid-three-cols">
        <div className="pokemon-info">
          <p>{base_experience}</p>
          <span> Experience:</span>
        </div>
        <div className="pokemon-info">
          <p>{attack}</p>
          <span>Attack:</span>
        </div>
        <div className="pokemon-info">
          <p>
            {ability}
          </p>
          <span> Abilities: </span>
        </div>
      </div>
    </li>
  );
};
