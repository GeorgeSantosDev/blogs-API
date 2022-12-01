module.exports = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory',
  {
    postId: { type: DataTypes.INTEGER, primaryKey: true },
    categoryId: { type: DataTypes.INTEGER, primaryKey: true },
  },
  {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });

  postCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'categories',
      through: postCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });

    models.BlogPost.belongsToMany(models.Category, {
      as: 'posts',
      through: postCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return postCategory;
};