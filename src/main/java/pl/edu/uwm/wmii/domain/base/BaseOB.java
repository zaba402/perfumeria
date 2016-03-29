package pl.edu.uwm.wmii.domain.base;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

/**
 * Created by wojciech.baczewski on 2016-03-29.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
@MappedSuperclass
public class BaseOB implements Serializable {

    private static final long serialVersionUID = 3753557092596905512L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @NotNull
    @Column(name = "ACTIVE")
    private Boolean active = true;

    @NotNull
    @Column(name = "DELETED")
    private Boolean deleted = false;

    @NotNull
    @Column(name = "CREATION_DATE", updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private final Date dateCreate = new Date();
}
